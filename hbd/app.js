(() => {
"use strict";

/* =========================================================
   RNG SF — HBD APP
   ---------------------------------------------------------
   - HBD punya halaman sendiri.
   - Tanggal ulang tahun tidak ditampilkan di UI.
   - Setelah berhasil verifikasi, browser dikunci ke satu akun.
   - Sesi disimpan di localStorage agar tetap berlaku setelah reload.
   - Reset akun hanya muncul saat global.debug = true.
   ========================================================= */

const cfg = window.HBD_CONFIG || {};
const CONTROL = window.RNG_CONTROL || {};
const qs = s => document.querySelector(s);
const params = new URLSearchParams(location.search);
const requestedId = params.get("id") || "";
const SESSION_KEY = "RNG_HBD_SESSION_V1";

const birthdayPeople = Array.isArray(window.HBD_DATA)
    ? window.HBD_DATA.filter(p =>
        p &&
        p.enabled !== false &&
        /^\d{8}$/.test(String(p.ulta || p.birthday || ""))
      )
    : [];

const birthdayCode = p => String(p?.ulta || p?.birthday || "");
const personId = p => String(p?.id || "");
const targetNameOf = p => p?.nama || p?.nickname || p?.fullName || "kamu";

function loadSession(){
    try{
        const raw = localStorage.getItem(SESSION_KEY);
        if(!raw) return null;
        const data = JSON.parse(raw);
        if(!data || !data.id) return null;
        return data;
    }catch(e){
        return null;
    }
}

function saveSession(person){
    const data = {
        id: personId(person),
        loggedAt: new Date().toISOString()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
}

function clearSession(){
    localStorage.removeItem(SESSION_KEY);
}

function getPerson(id){
    return birthdayPeople.find(p => personId(p) === String(id)) || null;
}

const savedSession = loadSession();

/* Kalau sudah pernah login, URL orang lain tidak boleh mengambil alih sesi. */
if(savedSession && requestedId && savedSession.id !== requestedId){
    renderLocked(savedSession);
    return;
}

const activeId = savedSession?.id || requestedId;
const person = getPerson(activeId);

if(!person){
    renderLocked(savedSession, "Halaman HBD ini harus dibuka dari pintu HBD yang benar.");
    return;
}

const birthday = birthdayCode(person);
const targetName = targetNameOf(person);
const message = String(
    person?.pesanHBD ||
    window.HBD_MESSAGE_DATA?.[person?.hbdMessageNo || person?.id] ||
    window.HBD_MESSAGE_DATA?.default ||
    "Selamat ulang tahun, {name}. 🤍"
).replaceAll("{name}", targetName);

function pad(n){ return String(n).padStart(2,"0"); }
function dateParts(code){
    return {
        day:Number(code.slice(0,2)),
        month:Number(code.slice(2,4)),
        year:Number(code.slice(4,8))
    };
}
function validDateCode(code){
    if(!/^\d{8}$/.test(code)) return false;
    const d=dateParts(code);
    const x=new Date(d.year,d.month-1,d.day);
    return x.getFullYear()===d.year && x.getMonth()===d.month-1 && x.getDate()===d.day;
}
function birthdayDate(p,year){
    const d=dateParts(birthdayCode(p));
    return new Date(year,d.month-1,d.day,0,0,0,0);
}
function windowFor(p,year){
    const bd=birthdayDate(p,year);
    const start=new Date(bd.getTime() - Number(CONTROL.hbd?.startHoursBeforeBirthday || 0)*3600000);
    const end=new Date(bd.getTime() + Number(CONTROL.hbd?.endHoursAfterBirthday || 0)*3600000);
    return {bd,start,end};
}
function activeWindow(p,now=new Date()){
    const current=windowFor(p,now.getFullYear());
    if(now>=current.start && now<=current.end) return current;
    const next=windowFor(p,now.getFullYear()+1);
    if(now>=next.start && now<=next.end) return next;
    return null;
}
function scheduleIsActive(){
    return typeof window.rngHbdScheduleEnabled === "function"
        ? window.rngHbdScheduleEnabled()
        : false;
}
function allowedNow(p){
    if(!scheduleIsActive()) return true;
    return !!activeWindow(p,new Date());
}
function nextWindow(p,now=new Date()){
    const current=windowFor(p,now.getFullYear());
    const next=windowFor(p,now.getFullYear()+1);
    if(now < current.start) return current;
    return next;
}
function fmtCountdown(ms){
    let s=Math.max(0,Math.floor(ms/1000));
    const days=Math.floor(s/86400); s%=86400;
    const hours=Math.floor(s/3600); s%=3600;
    const minutes=Math.floor(s/60); s%=60;
    return `${days} hari · ${pad(hours)}:${pad(minutes)}:${pad(s)}`;
}
function escapeHtml(v){
    return String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

const screens=[...document.querySelectorAll(".screen")];
function go(id){
    screens.forEach(s=>s.classList.toggle("active",s.id===id));
    window.scrollTo({top:0,behavior:"smooth"});
}

function renderLocked(session, customMessage){
    const box=qs("#session-lock");
    if(!box) return;
    const title=qs("#sessionLockTitle");
    const text=qs("#sessionLockText");
    const debug=qs("#debugResetSession");

    title.textContent=session
        ? "Sesi ini sudah terikat. 🔒"
        : "Pintu HBD tidak ditemukan. 🔒";
    text.textContent=customMessage ||
        "Browser ini sudah terdaftar pada satu ucapan. Masuk ke ucapan lain tidak akan mengganti akun yang sedang terdaftar.";

    if(CONTROL.global?.debug === true){
        debug?.classList.remove("hidden");
        if(debug) debug.onclick=()=>{
            clearSession();
            location.href="../index.html";
        };
    }

    go("session-lock");
}

/* =========================
   SESSION / GATE
   ========================= */
const debugReset=qs("#debugResetSession");
if(CONTROL.global?.debug === true){
    debugReset?.classList.remove("hidden");
    debugReset.onclick=()=>{
        clearSession();
        location.href="../index.html";
    };
}

const now=new Date();
const windowState=activeWindow(person,now);

if(!allowedNow(person)){
    qs("#lockTitle").textContent="Suratnya belum waktunya. 🤍";
    qs("#lockText").textContent="Halaman ini sudah benar, tapi surat belum berada dalam waktu yang ditentukan.";
    qs("#openBtn").disabled=true;
    qs("#openBtn").textContent="Belum waktunya";
    qs("#countdown").textContent=fmtCountdown(nextWindow(person,now).start-now);
}else{
    qs("#lockTitle").textContent="Suratnya sudah siap. ✦";
    qs("#lockText").textContent="Kalau kamu memang orang yang dituju, lanjutkan pelan-pelan ya.";
    qs("#openBtn").disabled=false;
    qs("#openBtn").textContent=savedSession ? "Lanjut ke surat 🤍" : "Buka suratnya 🤍";
    qs("#countdown").textContent="✦ Waktu surat sedang aktif";
}

function liveClock(){
    const d=new Date();
    qs("#liveDate").textContent=d.toLocaleDateString("id-ID",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});
    qs("#liveTime").textContent=d.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"});

    if(!scheduleIsActive()){
        qs("#countdown").textContent="✦ Mode testing / jadwal tidak membatasi";
        return;
    }

    const active=activeWindow(person,d);
    if(active){
        qs("#countdown").textContent="✦ Waktu surat sedang aktif";
    }else{
        qs("#countdown").textContent=fmtCountdown(nextWindow(person,d).start-d);
    }
}
setInterval(liveClock,1000);
liveClock();

/* =========================
   VISUAL
   ========================= */
const stars=qs("#stars");
for(let i=0;i<55;i++){
    const s=document.createElement("i");
    s.style.cssText=`position:absolute;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:#fff;border-radius:50%;opacity:${.15+Math.random()*.55};animation:twinkle ${2+Math.random()*4}s ease-in-out infinite ${Math.random()*3}s`;
    stars.appendChild(s);
}
const starStyle=document.createElement("style");
starStyle.textContent="@keyframes twinkle{50%{opacity:.05;transform:scale(.6)}}";
document.head.appendChild(starStyle);

/* =========================
   OPEN / VERIFY
   ========================= */
qs("#openBtn").onclick=()=>{
    if(!allowedNow(person)) return;
    qs("#screen-lock .envelope").classList.add("open");
    setTimeout(()=>go("screen-code"),500);
};

qs("#birthdayCode").addEventListener("input",e=>{
    e.target.value=e.target.value.replace(/\D/g,"").slice(0,8);
});

qs("#verifyBtn").onclick=()=>{
    const value=qs("#birthdayCode").value;
    const error=qs("#codeError");

    if(!validDateCode(value)){
        error.textContent="Kode belum lengkap. Masukkan 8 angka kode pribadi.";
        return;
    }
    if(value!==birthday){
        error.textContent="Hmm... kayaknya kode ini bukan kode yang benar. 😭";
        return;
    }

    /* Begitu benar, akun browser dikunci ke orang ini. */
    saveSession(person);
    error.textContent="";
    renderLetter();
    qs("#introTitle").textContent=`Hei, ${targetName}.`;
    qs("#introText").textContent="Aku sengaja bikin ini sedikit lebih panjang. Jadi tolong jangan langsung di-skip yaa. 😭";
    go("screen-intro");
};

/* =========================
   LETTER
   ========================= */
function renderLetter(){
    qs("#letterHeading").textContent=`Untuk ${targetName}.`;
    qs("#letterText").innerHTML=message
        .split(/\n\s*\n/g)
        .map(p=>`<p>${escapeHtml(p).replace(/\n/g,"<br>")}</p>`)
        .join("");
}

qs("#introNext").onclick=()=>go("screen-letter");
qs("#letterNext").onclick=()=>go("screen-cake");

/* =========================
   CAKE / WISH
   ========================= */
let holding=false,holdTimer=null;
const holdBtn=qs("#holdCandle");
const flame=qs("#flame");
const startHold=e=>{
    e.preventDefault();
    if(holding || flame.classList.contains("off")) return;
    holding=true; holdBtn.classList.add("holding");
    holdTimer=setTimeout(()=>{
        flame.classList.add("off");
        holding=false; holdBtn.classList.remove("holding");
        qs("#cakeHint").textContent="Nahhh, akhirnya padam juga. 😭✨ Sekarang bikin harapan.";
        qs("#wishNext").classList.remove("hidden");
    },1000);
};
const cancelHold=()=>{
    if(!holding) return;
    holding=false; clearTimeout(holdTimer); holdBtn.classList.remove("holding");
};
holdBtn.addEventListener("pointerdown",startHold);
holdBtn.addEventListener("pointerup",cancelHold);
holdBtn.addEventListener("pointerleave",cancelHold);
holdBtn.addEventListener("pointercancel",cancelHold);
qs("#wishNext").onclick=()=>go("screen-wish");
qs("#wishDone").onclick=()=>startQuestions();

/* =========================
   QUESTIONS
   ========================= */
const answers=[];
let qIndex=0;
function startQuestions(){
    qIndex=0; answers.length=0; renderQuestion(); go("screen-questions");
}
function renderQuestion(){
    const qsList=Array.isArray(cfg.questions)?cfg.questions:[];
    const question=qsList[qIndex] || "";
    qs("#qProgress").textContent=`${qIndex+1} / ${qsList.length}`;
    qs("#questionTitle").textContent=question;
    const body=qs("#questionBody");
    body.innerHTML="";

    if(qIndex===4){
        const options=["🥹 Terharu","😊 Senang","😭 Hampir nangis","😐 B aja jir","❤️ Susah dijelasin"];
        const grid=document.createElement("div"); grid.className="option-grid";
        options.forEach(v=>{
            const b=document.createElement("button"); b.className="option"; b.type="button"; b.textContent=v;
            b.onclick=()=>{
                grid.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));
                b.classList.add("selected");
                body.dataset.answer=v;
            };
            grid.appendChild(b);
        });
        body.appendChild(grid);
    }else{
        const ta=document.createElement("textarea");
        ta.className="answer-area";
        ta.placeholder="Tulis jawabannya di sini...";
        body.appendChild(ta);
    }
    qs("#questionNext").textContent=qIndex===qsList.length-1?"Selesai ✦":"Lanjut →";
}
qs("#questionNext").onclick=()=>{
    const body=qs("#questionBody");
    let value="";
    const selected=body.querySelector(".option.selected");
    const area=body.querySelector("textarea");
    if(selected) value=selected.textContent;
    else if(area) value=area.value.trim();
    if(!value){area?.focus();return;}
    answers.push(value);
    if(qIndex >= (cfg.questions?.length||1)-1){renderFinal();go("screen-final");}
    else{qIndex++;renderQuestion();}
};

function responseText(){
    const lines=[
        `Halo! Aku sudah selesai membuka surat ulang tahunnya untuk ${targetName}. 🤍`,
        "",
        "Jawabanku:",
        ""
    ];
    answers.forEach((a,i)=>{
        lines.push(`${i+1}. ${cfg.questions?.[i]||"Pertanyaan"}`);
        lines.push(`   ${a}`);
        lines.push("");
    });
    lines.push("Aku sudah benar-benar sampai di akhir dan sudah membaca semuanya. Makasih ya.");
    return lines.join("\n");
}

async function copyText(text){
    try{
        await navigator.clipboard.writeText(text);
        return true;
    }catch(e){
        const ta=document.createElement("textarea");
        ta.value=text; document.body.appendChild(ta); ta.select();
        let ok=false;
        try{ok=document.execCommand("copy");}catch(_){ }
        ta.remove();
        return ok;
    }
}

function renderFinal(){
    const names=cfg.questions||[];
    qs("#finalText").textContent=`Makasih ya, ${targetName}. Aku senang kamu mau sampai sejauh ini dan benar-benar membaca semuanya. 🤍`;
    qs("#summary").innerHTML=answers.map((a,i)=>`
        <div class="summary-row"><b>${escapeHtml(names[i]||`Jawaban ${i+1}`)}</b>${escapeHtml(a)}</div>
    `).join("");

    const methods=CONTROL.hbd?.responseMethods || {};
    qs("#whatsappBtn").classList.toggle("hidden",methods.whatsapp===false);
    qs("#emailBtn").classList.toggle("hidden",methods.email===false || !String(CONTROL.contact?.email||"").trim());
    qs("#gmailBtn").classList.toggle("hidden",methods.gmail===false || !String(CONTROL.contact?.email||"").trim());
    qs("#tiktokBtn").classList.toggle("hidden",methods.tiktok===false || !String(CONTROL.contact?.tiktok||"").trim());
    qs("#instagramBtn").classList.toggle("hidden",methods.instagram===false || !String(CONTROL.contact?.instagram||"").trim());
    qs("#telegramBtn").classList.toggle("hidden",methods.telegram===false || !String(CONTROL.contact?.telegram||"").trim());
    qs("#copyBtn").classList.toggle("hidden",methods.copy===false);
}

qs("#whatsappBtn").onclick=()=>{
    const number=String(CONTROL.contact?.whatsapp || cfg.whatsapp || "").replace(/\D/g,"");
    if(!number) return;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(responseText())}`,"_blank");
};

qs("#emailBtn").onclick=()=>{
    const email=String(CONTROL.contact?.email || "").trim();
    if(!email) return;
    const subject=`Jawaban setelah membaca surat ulang tahun untuk ${targetName}`;
    window.location.href=`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(responseText())}`;
};

qs("#gmailBtn").onclick=()=>{
    const email=String(CONTROL.contact?.email || "").trim();
    if(!email) return;
    const subject=`Jawaban setelah membaca surat ulang tahun untuk ${targetName}`;
    const body=responseText();
    const url=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url,"_blank");
};

qs("#tiktokBtn").onclick=async()=>{
    const ok=await copyText(responseText());
    const url=String(CONTROL.contact?.tiktok || "").trim();
    qs("#tiktokBtn").textContent=ok?"Pesan tersalin ✓ Buka TikTok":"Salin gagal — coba lagi";
    if(ok && url) window.open(url,"_blank");
};

qs("#instagramBtn").onclick=async()=>{
    const ok=await copyText(responseText());
    const url=String(CONTROL.contact?.instagram || "").trim();
    qs("#instagramBtn").textContent=ok?"Pesan tersalin ✓ Buka Instagram":"Salin gagal — coba lagi";
    if(ok && url) window.open(url,"_blank");
};

qs("#telegramBtn").onclick=async()=>{
    const url=String(CONTROL.contact?.telegram || "").trim();
    if(!url) return;
    const ok=await copyText(responseText());
    qs("#telegramBtn").textContent=ok?"Pesan tersalin ✓ Buka Telegram":"Salin gagal — coba lagi";
    if(ok) window.open(url,"_blank");
};

qs("#copyBtn").onclick=async()=>{
    const ok=await copyText(responseText());
    qs("#copyBtn").textContent=ok?"Pesan tersalin ✓":"Gagal menyalin — coba lagi";
};

renderLetter();
})();
