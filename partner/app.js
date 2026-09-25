/* RNG Partner UI prototype.
 * This file intentionally uses demo data only. Financial authorization,
 * payment verification, balances, and roles must be implemented server-side.
 */
const STORAGE_KEY = "rng_partner_demo_v1";
const money = value => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value || 0);
const initialState = {
  partner: { name: "RNG Partner", status: "Aktif", code: "RNG-A8K2" },
  stats: { clicks: 128, attributions: 12, orders: 3, commission: 150000, reward: 75000, available: 225000 },
  commissions: [
    { order: "ORD-DEMO-001", campaign: "RNG Digital Launch", transaction: 250000, amount: 50000, status: "APPROVED" },
    { order: "ORD-DEMO-002", campaign: "RNG Hosting Intro", transaction: 500000, amount: 100000, status: "PENDING" }
  ],
  submissions: [{ title: "Video TikTok — RNG SF", platform: "TikTok", status: "reviewing", reward: 75000 }],
  withdrawals: [],
  activity: [
    { title: "Komisi dibuat untuk ORD-DEMO-002", date: "Hari ini", amount: "+Rp100.000" },
    { title: "Konten diajukan untuk ditinjau", date: "Kemarin", amount: "Review" },
    { title: "Referral attribution aktif", date: "3 hari lalu", amount: "12 attribution" }
  ]
};
let state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || structuredClone(initialState);
const $ = id => document.getElementById(id);
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function render(){
  $("partnerName").textContent = state.partner.name; $("partnerStatus").textContent = state.partner.status;
  $("statOrders").textContent = state.stats.orders; $("statCommission").textContent = money(state.stats.commission); $("statReward").textContent = money(state.stats.reward); $("statAvailable").textContent = money(state.stats.available);
  $("withdrawBalance").textContent = money(state.stats.available); $("refClicks").textContent = state.stats.clicks; $("refAttributions").textContent = state.stats.attributions; $("refConversion").textContent = `${state.stats.clicks ? ((state.stats.orders / state.stats.clicks) * 100).toFixed(1) : 0}%`;
  $("refLink").textContent = `${location.origin}${location.pathname.replace(/\/partner\/?$/, "")}/?ref=${state.partner.code}`;
  $("commissionRows").innerHTML = state.commissions.map(row => `<tr><td>${row.order}</td><td>${row.campaign}</td><td>${money(row.transaction)}</td><td>${money(row.amount)}</td><td><span class="tag ${row.status === "APPROVED" ? "good" : "warn"}">${row.status}</span></td></tr>`).join("") || `<tr><td colspan="5">Belum ada komisi.</td></tr>`;
  $("submissionList").innerHTML = state.submissions.map(item => `<div class="submission-item"><div><b>${item.title}</b><small>${item.platform} · metric menunggu verifikasi</small></div><span class="tag ${item.status === "approved" ? "good" : "warn"}">${item.status}</span></div>`).join("") || `<p class="muted">Belum ada submission.</p>`;
  const activities = state.activity.map(item => `<div class="activity-item"><div><b>${item.title}</b><small>${item.date}</small></div><span class="activity-amount">${item.amount}</span></div>`).join(""); $("recentActivity").innerHTML = activities || `<p class="muted">Belum ada aktivitas.</p>`; $("activityList").innerHTML = activities || `<p class="muted">Belum ada aktivitas.</p>`;
  $("withdrawalList").innerHTML = state.withdrawals.map(item => `<div class="activity-item"><div><b>${money(item.amount)} · ${item.method}</b><small>${item.date}</small></div><span class="tag warn">${item.status}</span></div>`).join("") || `<p class="muted">Belum ada request pencairan.</p>`;
}
function toast(message){ const node=$("toast"); node.textContent=message; node.classList.add("show"); setTimeout(()=>node.classList.remove("show"),2200); }
function showView(name){ document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${name}`)); document.querySelectorAll("[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===name)); }
document.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.view)));
$("copyReferral").addEventListener("click",async()=>{ try{await navigator.clipboard.writeText($("refLink").textContent);toast("Referral link disalin");}catch{toast("Salin link secara manual");} });
$("newSubmission").addEventListener("click",()=>{ state.submissions.unshift({title:"Submission baru — menunggu review",platform:"Belum ditentukan",status:"submitted",reward:0}); state.activity.unshift({title:"Content submission dibuat",date:"Baru saja",amount:"Review"}); save();render();toast("Submission demo dibuat"); });
$("requestWithdrawal").addEventListener("click",()=>{const amount=Number($("withdrawAmount").value); if(!amount||amount<10000){toast("Minimum demo adalah Rp10.000");return} if(amount>state.stats.available){toast("Saldo tersedia tidak cukup");return} state.stats.available-=amount; state.withdrawals.unshift({amount,method:$("withdrawMethod").value,date:"Baru saja",status:"requested"}); state.activity.unshift({title:"Withdrawal request dibuat",date:"Baru saja",amount:money(amount)}); save();render();$("withdrawAmount").value="";toast("Request pencairan tersimpan di demo");});
render();
