const scenes=[...document.querySelectorAll(".scene")];
const dots=[...document.querySelectorAll(".dot")];
const music=document.getElementById("music");
let current=0;

document.title=`For ${CONFIG.name} ♡`;
music.src=CONFIG.music;

document.getElementById("name1").textContent=CONFIG.name;
document.getElementById("name2").textContent=CONFIG.nickname || CONFIG.name;
document.getElementById("nameFinal").textContent=CONFIG.name;
document.getElementById("intro").textContent=CONFIG.intro;
document.getElementById("date").textContent=CONFIG.birthday;
document.getElementById("letterTitle").textContent=`Untuk ${CONFIG.name},`;
document.getElementById("wish").textContent=`“${CONFIG.finalWish}”`;
document.getElementById("memorySymbol").textContent=CONFIG.memorySymbol || CONFIG.name[0];

const msg=document.getElementById("message");
CONFIG.message.forEach(t=>{
  const p=document.createElement("p");
  p.textContent=t;
  msg.appendChild(p);
});

function go(i){
  if(i<0||i>=scenes.length)return;
  scenes[current].classList.remove("active");
  dots[current].classList.remove("active");
  current=i;
  scenes[current].classList.add("active");
  dots[current].classList.add("active");

  // Animasi lilin dimulai saat birthday screen muncul.
  if(i===2) lightCandles();
}

function startMusic(){
  music.play().then(()=>{
    document.getElementById("musicBtn").classList.add("on");
  }).catch(()=>{});
}

document.querySelectorAll(".next").forEach(btn=>{
  btn.addEventListener("click",()=>{go(current+1);startMusic()});
});

dots.forEach((d,i)=>d.addEventListener("click",()=>{go(i);startMusic()}));
document.addEventListener("pointerdown",startMusic,{once:true});

document.getElementById("musicBtn").onclick=()=>{
  if(music.paused) startMusic();
  else {
    music.pause();
    document.getElementById("musicBtn").classList.remove("on");
  }
};

document.getElementById("again").onclick=()=>go(0);

function lightCandles(){
  document.querySelectorAll(".candle i").forEach((f,n)=>{
    f.style.animationDelay=`${n*90}ms`;
  });
}

/* Candle interaction: tap the cake to blow candles out, tap again to relight. */
let candlesOut=false;
document.getElementById("cake").addEventListener("click",()=>{
  candlesOut=!candlesOut;
  document.querySelectorAll(".candle i").forEach(f=>{
    f.style.opacity=candlesOut?"0":"1";
    f.style.transform=candlesOut?"scale(0)":"scale(1)";
  });
  if(candlesOut) confetti(55);
});

/* Final celebration */
document.getElementById("wishBtn").addEventListener("click",()=>{
  startMusic();
  confetti(190);
  document.querySelector(".final-heart").animate([
    {transform:"scale(1)"},
    {transform:"scale(1.35)"},
    {transform:"scale(1)"}
  ],{duration:700,easing:"ease-out"});
});

/* Lightweight particle/confetti system */
const canvas=document.getElementById("fx");
const ctx=canvas.getContext("2d");
let W=0,H=0,particles=[],raf=0;
function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight}
resize();addEventListener("resize",resize);

function confetti(count){
  particles.push(...Array.from({length:count},()=>({
    x:W/2,y:H*.48,
    vx:(Math.random()-.5)*10,
    vy:-Math.random()*12-3,
    g:.18+Math.random()*.18,
    rot:Math.random()*6,
    vr:(Math.random()-.5)*.35,
    s:4+Math.random()*7,
    life:1,
    shape:Math.random()>.5?"rect":"circle"
  })));
  if(!raf) draw();
}
function draw(){
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.rot+=p.vr;p.life-=.008;
    ctx.save();ctx.globalAlpha=Math.max(0,p.life);
    ctx.translate(p.x,p.y);ctx.rotate(p.rot);
    ctx.fillStyle=["#f7c9df","#ebcb8c","#fff9fc","#c9afe9"][Math.floor(Math.random()*4)];
    if(p.shape==="rect")ctx.fillRect(-p.s/2,-p.s/3,p.s,p.s*.55);
    else{ctx.beginPath();ctx.arc(0,0,p.s/2,0,Math.PI*2);ctx.fill()}
    ctx.restore();
  });
  particles=particles.filter(p=>p.life>0);
  raf=particles.length?requestAnimationFrame(draw):0;
}
