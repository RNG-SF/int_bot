// engine.js
// Mesin portal modular: tombol, modal ID, akses rahasia, dan animasi background.

document.addEventListener('DOMContentLoaded',()=>{
  'use strict';

  const $=id=>document.getElementById(id);
  const settings=window.PORTAL_SETTINGS||{};
  const buttons=Array.isArray(window.PORTAL_BUTTONS)?window.PORTAL_BUTTONS:[];
  const data=window.ACCESS_DATA||{};

  document.title=settings.title||document.title;
  const name=document.querySelector('.username'); if(name&&settings.username) name.textContent=settings.username;
  const bio=document.querySelector('.bio'); if(bio&&settings.bio) bio.textContent=settings.bio;
  const logo=document.querySelector('.profile-img'); if(logo&&settings.logo) logo.src=settings.logo;
  const secretBtn=$('open-secret-access'); if(secretBtn&&settings.secretButton) secretBtn.textContent=settings.secretButton;

  // ---------- dynamic buttons ----------
  const list=$('dynamic-buttons');
  const iconMap={
    tk:'wrapper-tk',ig:'wrapper-ig',wa:'wrapper-wa', 'wa-group':'wrapper-wa-group', 'wa-channel':'wrapper-wa-channel', main:'wrapper-main'
  };
  const svg={
    tk:'<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-4.32-2.51V9.4a6.33 6.33 0 1 0 5.2 6.27v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>'
  };

  function createLinkButton(item,index){
    const wrap=document.createElement('div');
    wrap.className=`social-btn-wrapper ${iconMap[item.accent]||'wrapper-wa-group'} animate-item`;
    const glow=document.createElement('div'); glow.className='btn-glow-border'; wrap.appendChild(glow);
    const a=document.createElement('a'); a.className='social-btn'; a.href=item.url||'#'; a.target='_blank'; a.rel='noopener noreferrer';
    const info=document.createElement('div'); info.className='social-info';
    const ic=document.createElement('span'); ic.className='icon'; ic.textContent=item.icon||'•';
    const label=document.createElement('span'); label.textContent=item.name||'Link';
    info.append(ic,label); const arrow=document.createElement('span'); arrow.className='arrow'; arrow.textContent='→'; a.append(info,arrow); wrap.appendChild(a);
    return wrap;
  }

  function createIdButton(item,index){
    const wrap=document.createElement('div');
    wrap.className='social-btn-wrapper wrapper-wa-group animate-item';
    const glow=document.createElement('div'); glow.className='btn-glow-border'; wrap.appendChild(glow);
    const button=document.createElement('button'); button.type='button'; button.className='social-btn'; button.style.width='100%'; button.style.cursor='pointer';
    const info=document.createElement('div'); info.className='social-info'; const ic=document.createElement('span'); ic.className='icon'; ic.textContent=item.icon||'◆'; const label=document.createElement('span'); label.textContent=item.name||'Data'; info.append(ic,label);
    const arrow=document.createElement('span'); arrow.className='arrow'; arrow.textContent='→'; button.append(info,arrow); wrap.appendChild(button);
    button.addEventListener('click',()=>openIdModal(item)); return wrap;
  }

  function openIdModal(item){
    let modal=$('dynamic-id-modal');
    if(!modal){
      modal=document.createElement('div'); modal.id='dynamic-id-modal'; modal.className='modal-overlay dynamic-id-modal';
      modal.innerHTML=`<div class="modal-box"><button class="access-close" id="dynamic-id-close" style="position:absolute;right:12px;top:10px;z-index:2;">×</button><div class="modal-title" id="dynamic-id-title"></div><div class="dynamic-id-content" id="dynamic-id-content"></div><div class="modal-actions"><button class="btn-secondary" id="dynamic-id-close2">Tutup</button></div></div>`;
      document.body.appendChild(modal);
      const close=()=>modal.classList.remove('active'); $('dynamic-id-close').onclick=close; $('dynamic-id-close2').onclick=close; modal.addEventListener('click',e=>{if(e.target===modal)close();});
    }
    $('dynamic-id-title').textContent=item.title||item.name||'Data';
    const content=$('dynamic-id-content'); content.innerHTML='';
    Object.entries(item.values||{}).forEach(([label,value])=>{
      const row=document.createElement('div'); row.className='dynamic-id-row';
      const l=document.createElement('span'); l.className='dynamic-id-label'; l.textContent=label;
      const v=document.createElement('div'); v.className='dynamic-id-value'; v.textContent=String(value);
      const actions=document.createElement('div'); actions.className='dynamic-id-actions';
      const copy=document.createElement('button'); copy.type='button'; copy.textContent='SALIN';
      copy.onclick=async()=>{try{await navigator.clipboard.writeText(String(value));copy.textContent='TERSALIN ✓';setTimeout(()=>copy.textContent='SALIN',1300);}catch{copy.textContent='GAGAL';}};
      actions.appendChild(copy); row.append(l,v,actions); content.appendChild(row);
    });
    modal.classList.add('active');
  }

  if(list){
    list.innerHTML='';
    buttons.forEach((item,index)=>list.appendChild(item.type==='id'?createIdButton(item,index):createLinkButton(item,index)));
    list.querySelectorAll('.animate-item').forEach((item,index)=>{item.style.animation=`slideUpFade .6s cubic-bezier(.16,1,.3,1) forwards`;item.style.animationDelay=`${.25+index*.08}s`;});
  }

  // ---------- secret access ----------
  const access=$('secret-access'), close=$('secret-close'), input=$('access-input'), submit=$('access-submit'), status=$('access-status'), title=$('access-title'), desc=$('access-description'), badge=$('special-badge'), note=$('super-note'), success=$('secret-success'), cont=$('secret-continue'), open=$('open-secret-access');
  let stage='main',activeSpecial=null,activeSuper=null,superStep=1;
  const msg=window.PORTAL_MESSAGES||{};
  function reset(){stage='main';activeSpecial=null;activeSuper=null;superStep=1;access.classList.remove('special-theme','super-theme');title.textContent='PRIVATE ACCESS';desc.textContent='Masukkan kode akses untuk melanjutkan.';input.placeholder='Masukkan kode';input.value='';status.textContent='';badge.textContent='';note.textContent='';submit.textContent='CONTINUE';}
  function openAccess(){reset();access.classList.add('active');setTimeout(()=>input.focus(),250);}
  function closeAccess(){access.classList.remove('active');success.classList.remove('active');reset();}
  function go(link){if(link) window.location.href=link;}
  function find(arr,val){return Array.isArray(arr)?arr.find(x=>String(x.password1)===String(val)):null;}
  function showSpecial(item){stage='special';activeSpecial=item;access.classList.add('special-theme');access.classList.remove('super-theme');title.textContent='SPECIAL ACCESS';desc.innerHTML='Tahap 2 dari 2 · Verifikasi lanjutan.';input.placeholder='Masukkan password kedua';submit.textContent='VERIFIKASI';badge.textContent='Akses khusus terdeteksi.';status.textContent='';input.value='';input.focus();}
  function showSuper(item){stage='super';activeSuper=item;superStep=2;access.classList.add('super-theme');access.classList.remove('special-theme');title.textContent='SUPER SPECIAL ACCESS';desc.innerHTML='Tahap 2 dari 3 · Verifikasi kedua.';input.placeholder='Masukkan password kedua';submit.textContent='VERIFIKASI';badge.textContent='';note.textContent='Akses ini memiliki satu verifikasi terakhir.';status.textContent='';input.value='';input.focus();}
  function showFinal(){superStep=3;title.textContent='FINAL VERIFICATION';desc.textContent='Tahap 3 dari 3 · Verifikasi terakhir.';input.placeholder='Masukkan password terakhir';submit.textContent='VERIFIKASI TERAKHIR';note.textContent='Jika kamu sampai di sini, berarti kode sebelumnya benar.';status.textContent='';input.value='';input.focus();}
  function submitAccess(){const value=input.value.trim();if(!value){status.textContent='Kode belum diisi.';return;}
    if(stage==='main'){
      if(data.normal&&String(data.normal.password)===value){status.textContent='Akses diterima.';setTimeout(()=>go(data.normal.link),350);return;}
      const sp=find(data.special,value);if(sp){showSpecial(sp);return;}
      const su=find(data.superSpecial,value);if(su){showSuper(su);return;}
      status.textContent='Kode tidak dikenali.';return;
    }
    if(stage==='special'){if(activeSpecial&&String(activeSpecial.password2)===value){status.textContent='Verifikasi berhasil.';setTimeout(()=>go(activeSpecial.link),450);}else status.textContent='Password kedua salah.';return;}
    if(stage==='super'&&superStep===2){if(activeSuper&&String(activeSuper.password2)===value){status.textContent='Verifikasi kedua berhasil.';setTimeout(showFinal,450);}else status.textContent='Password kedua salah.';return;}
    if(stage==='super'&&superStep===3){if(activeSuper&&String(activeSuper.password3)===value){status.textContent='Seluruh verifikasi berhasil.';setTimeout(()=>{access.classList.remove('active');success.classList.add('active');},450);}else status.textContent='Password terakhir salah.';}
  }
  if(open)open.onclick=openAccess;if(close)close.onclick=closeAccess;if(submit)submit.onclick=submitAccess;if(input)input.onkeydown=e=>{if(e.key==='Enter')submitAccess();};if(access)access.onclick=e=>{if(e.target===access)closeAccess();};if(cont)cont.onclick=()=>{if(activeSuper&&activeSuper.link)go(activeSuper.link);};
  document.querySelectorAll('.modal-overlay').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('active');}));

  // ---------- existing WA / MC modals ----------
  const wa=$('wa-modal'),waOpen=$('btn-open-wa'),waClose=$('btn-close-modal'),waGo=$('btn-lanjut-wa');
  if(waOpen&&wa)waOpen.onclick=e=>{e.preventDefault();wa.classList.add('active');}; if(waClose&&wa)waClose.onclick=()=>wa.classList.remove('active'); if(waGo&&wa)waGo.onclick=()=>setTimeout(()=>wa.classList.remove('active'),500);
  const mc=$('mc-modal'),mcOpen=$('btn-open-mc'),mcClose=$('btn-close-mc-modal'),mcCopy=$('btn-copy-mc');
  if(mcOpen&&mc)mcOpen.onclick=()=>mc.classList.add('active'); if(mcClose&&mc)mcClose.onclick=()=>mc.classList.remove('active'); if(mcCopy)mcCopy.onclick=()=>navigator.clipboard.writeText('Server: RNG_SF\nIP: 103.190.0.15\nPort: 25621').then(()=>{mcCopy.textContent='Berhasil Disalin!';setTimeout(()=>mcCopy.textContent='Salin Detail Server',2000);});

  // ---------- particle background ----------
  const canvas=$('network-canvas'); if(!canvas)return; const ctx=canvas.getContext('2d');let w=0,h=0,particles=[];
  function resize(){w=innerWidth;h=innerHeight;canvas.width=w;canvas.height=h;const n=Math.min(Math.floor(w*h/11000),70);particles=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2.5+1}));}
  function animate(){ctx.clearRect(0,0,w,h);for(let i=0;i<particles.length;i++){const a=particles[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1;ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fillStyle='rgba(0,240,255,.4)';ctx.fill();for(let j=i+1;j<particles.length;j++){const b=particles[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;if(d2<14400){const d=Math.sqrt(d2);ctx.beginPath();ctx.strokeStyle=`rgba(0,240,255,${.18-d/1000})`;ctx.lineWidth=.8;ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}requestAnimationFrame(animate);}
  addEventListener('resize',resize);resize();animate();
});
