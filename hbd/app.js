(() => {
"use strict";

const cfg = window.HBD_CONFIG || {};
const qs = s => document.querySelector(s);
const params = new URLSearchParams(location.search);
const requestedId = params.get("id") || "";
const requestedBirthday = params.get("birthday") || "";

const accessPeople = [
    ...(Array.isArray(window.ACCESS_DATA?.special) ? window.ACCESS_DATA.special : []),
    ...(Array.isArray(window.ACCESS_DATA?.classmates) ? window.ACCESS_DATA.classmates : []),
    ...(Array.isArray(window.ACCESS_DATA?.superSpecial) ? window.ACCESS_DATA.superSpecial : [])
].filter(p =>
    p &&
    p.enabled !== false &&
    (p.featureType === "ulta" || p.hbdEnabled === true) &&
    /^\d{8}$/.test(String(p.birthday || ""))
);

const birthdayPeople = Array.isArray(window.HBD_DATA)
    ? window.HBD_DATA
        .map(h => {
            const access = accessPeople.find(p => String(p.id) === String(h.id));
            return access ? {...access, ...h, birthday: h.ulta} : {...h, birthday: h.ulta, enabled: true};
        })
        .filter(p => /^\d{8}$/.test(String(p.birthday || "")))
    : accessPeople;

const allPeople = birthdayPeople;

const person =
    allPeople.find(p => requestedId && String(p.id) === requestedId) ||
    allPeople.find(p => requestedBirthday && String(p.birthday) === requestedBirthday) ||
    allPeople[0];

const pad = n => String(n).padStart(2,"0");
const dateParts = code => ({
    day:Number(code.slice(0,2)),
    month:Number(code.slice(2,4)),
    year:Number(code.slice(4,8))
});
const validDateCode = code => {
    if(!/^\d{8}$/.test(code)) return false;
    const d=dateParts(code);
    const x=new Date(d.year,d.month-1,d.day);
    return x.getFullYear()===d.year && x.getMonth()===d.month-1 && x.getDate()===d.day;
};
const birthdayDate = (p,year) => {
    const d=dateParts(String(p.birthday));
    return new Date(year,d.month-1,d.day,0,0,0,0);
};
const currentBirthday = p => birthdayDate(p,new Date().getFullYear());
const isBirthday = p => {
    const now=new Date(), d=currentBirthday(p);
    return now >= d;
};
const nextBirthday = p => {
    const now=new Date();
    let d=birthdayDate(p,now.getFullYear());
    if(d <= now) d=birthdayDate(p,now.getFullYear()+1);
    return d;
};
const age = p => {
    const d=dateParts(String(p.birthday)), now=new Date();
    let a=now.getFullYear()-d.year;
    const b=birthdayDate(p,now.getFullYear());
    if(now<b) a--;
    return a;
};
const fmtDate = d => d.toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"});
const countdownParts = ms => {
    let s=Math.max(0,Math.floor(ms/1000));
    const days=Math.floor(s/86400); s%=86400;
    const hours=Math.floor(s/3600); s%=3600;
    const minutes=Math.floor(s/60); s%=60;
    return {days,hours,minutes,seconds:s};
};
const escapeHtml = v => String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));

const screens = [...document.querySelectorAll(".screen")];
function go(id){
    screens.forEach(s=>s.classList.toggle("active",s.id===id));
    window.scrollTo({top:0,behavior:"smooth"});
}

const birthdayCode = String(person?.birthday || "");
const targetName = person?.nama || person?.nickname || person?.fullName || "kamu";
const message = String(
    person?.pesanHBD ||
    window.HBD_MESSAGE_DATA?.[person?.hbdMessageNo || person?.id] ||
    window.HBD_MESSAGE_DATA?.default ||
    "Selamat ulang tahun, {name}. 🤍"
).replaceAll("{name}", targetName);

function renderLetter(){
    qs("#letterHeading").textContent = `Untuk ${targetName}.`;
    qs("#letterText").innerHTML = message
        .split(/\n\s*\n/g)
        .map(p=>`<p>${escapeHtml(p).replace(/\n/g,"<br>")}</p>`)
        .join("");
}

function liveClock(){
    const now=new Date();
    qs("#liveDate").textContent=now.toLocaleDateString("id-ID",{weekday:"long",day:"2-digit",month:"long",year:"numeric"});
    qs("#liveTime").textContent=now.toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
    const bd=currentBirthday(person);
    const before=now<bd;
    const openBtn=qs("#openBtn");
    const countdown=qs("#countdown");
    const delay=qs("#delay");

    if(before){
        const c=countdownParts(bd-now);
        countdown.textContent=`${c.days} hari · ${pad(c.hours)}:${pad(c.minutes)}:${pad(c.seconds)}`;
        delay.textContent="";
        openBtn.disabled=true;
        openBtn.textContent="Belum waktunya";
        qs("#lockTitle").textContent="Suratnya belum boleh dibuka. 🤍";
        qs("#lockText").textContent=`Tunggu sampai ${fmtDate(bd)} tepat pukul 00:00.`;
    }else{
        countdown.textContent="00:00 — waktunya tiba ✦";
        openBtn.disabled=false;
        openBtn.textContent="Buka suratnya 🤍";
        qs("#lockTitle").textContent="Selamat ulang tahun. 🎂";
        qs("#lockText").textContent=`Surat untuk ${targetName} sudah siap.`;
        const late=now-bd;
        if(late>0){
            const c=countdownParts(late);
            delay.textContent=`Status: - · terlambat +${c.days} hari ${c.hours} jam ${c.minutes} menit`;
        }else delay.textContent="";
    }
}
setInterval(liveClock,1000); liveClock();

const stars=qs("#stars");
for(let i=0;i<42;i++){
    const s=document.createElement("i");
    s.style.cssText=`position:absolute;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:#fff;border-radius:50%;opacity:${.15+Math.random()*.55};animation:twinkle ${2+Math.random()*4}s ease-in-out infinite ${Math.random()*3}s`;
    stars.appendChild(s);
}
const starStyle=document.createElement("style");
starStyle.textContent="@keyframes twinkle{50%{opacity:.05;transform:scale(.6)}}";
document.head.appendChild(starStyle);

qs("#openBtn").onclick=()=>{
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
        error.textContent="Format tanggalnya belum lengkap / tidak valid.";
        return;
    }
    if(value!==birthdayCode){
        error.textContent="Hmm... kayaknya kode ini bukan kode yang benar. 😭";
        return;
    }
    error.textContent="";
    renderLetter();
    qs("#introTitle").textContent=`Hei, ${targetName}.`;
    qs("#introText").textContent="Aku sengaja bikin ini sedikit lebih panjang. Jadi tolong jangan langsung di-skip yaa. 😭";
    go("screen-intro");
};

qs("#introNext").onclick=()=>go("screen-letter");
qs("#letterNext").onclick=()=>go("screen-cake");

let holding=false, holdTimer=null;
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
            b.onclick=()=>{grid.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");body.dataset.answer=v};
            grid.appendChild(b);
        });
        body.appendChild(grid);
    }else{
        const ta=document.createElement("textarea"); ta.className="answer-area"; ta.placeholder="Tulis jawabannya di sini..."; body.appendChild(ta);
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

function renderFinal(){
    const names=cfg.questions||[];
    qs("#finalText").textContent=`Makasih ya, ${targetName}. Aku senang kamu mau sampai sejauh ini dan benar-benar membaca semuanya. 🤍`;
    qs("#summary").innerHTML=answers.map((a,i)=>`
        <div class="summary-row"><b>${escapeHtml(names[i]||`Jawaban ${i+1}`)}</b>${escapeHtml(a)}</div>
    `).join("");
}
qs("#whatsappBtn").onclick=()=>{
    const lines=[
        "Halo! Aku sudah selesai membuka surat ulang tahunnya. 🤍",
        "",
        `Nama: ${targetName}`,
        `Ulang tahun: ${fmtDate(currentBirthday(person))}`,
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
    const url=`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url,"_blank");
};

renderLetter();
})();