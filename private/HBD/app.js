const screens=[...document.querySelectorAll(".screen")],dots=[...document.querySelectorAll(".dot")],music=document.getElementById("music"),mb=document.getElementById("musicBtn");let cur=0;
function go(id){let i=screens.findIndex(s=>s.id===id);if(i<0)return;screens[cur].classList.remove("active");dots[cur].classList.remove("active");cur=i;screens[cur].classList.add("active");dots[cur].classList.add("active")}
async function play(){try{await music.play();mb.textContent="♫";mb.classList.add("on")}catch(e){}}
document.querySelectorAll("[data-next]").forEach(b=>b.onclick=()=>{go(b.dataset.next);play()});dots.forEach(d=>d.onclick=()=>{go(d.dataset.go);play()});
document.addEventListener("pointerdown",()=>play(),{once:true});mb.onclick=()=>music.paused?play():(music.pause(),mb.classList.remove("on"));
document.getElementById("restart").onclick=()=>go("s1");
const c=document.getElementById("confetti"),x=c.getContext("2d");let ps=[],raf;function size(){c.width=innerWidth;c.height=innerHeight}size();addEventListener("resize",size);
function celebrate(){ps=Array.from({length:170},()=>({x:innerWidth/2,y:innerHeight*.45,vx:(Math.random()-.5)*9,vy:-Math.random()*10-3,g:.2+Math.random()*.2,r:Math.random()*360,s:4+Math.random()*7,a:1}));cancelAnimationFrame(raf);draw()}
function draw(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.r+=8;p.a-=.007;x.save();x.globalAlpha=Math.max(p.a,0);x.translate(p.x,p.y);x.rotate(p.r*Math.PI/180);x.fillStyle=["#f6c9df","#e8c889","#fff8fb","#caa9ed"][Math.floor(Math.random()*4)];x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.45);x.restore()});ps=ps.filter(p=>p.a>0);if(ps.length)raf=requestAnimationFrame(draw)}
document.getElementById("celebrate").onclick=()=>{play();celebrate()};
