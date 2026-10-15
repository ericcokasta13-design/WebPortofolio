(function(){
  // mode terang/gelap
  var root=document.documentElement, btn=document.getElementById('themeBtn');
  var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  function apply(){root.setAttribute('data-theme',dark?'dark':'light');btn.textContent=dark?'☀️':'🌙';}
  apply();
  btn.addEventListener('click',function(){dark=!dark;apply();});

  // maskot
  var lines=['bip bop! 🤖','air aman!','jangan lupa ngopi ☕','ESP32 siap!','halo juga 👋'],i=0;
  document.getElementById('bot').addEventListener('click',function(){
    i=(i+1)%lines.length;document.getElementById('bubble').textContent=lines[i];
  });
  var eyes=[document.getElementById('eyeL'),document.getElementById('eyeR')];
  window.addEventListener('pointermove',function(e){
    var r=document.getElementById('bot').getBoundingClientRect();
    var dx=(e.clientX-(r.left+r.width/2)),dy=(e.clientY-(r.top+r.height/2));
    var d=Math.max(1,Math.hypot(dx,dy)),m=7;
    eyes.forEach(function(el){el.setAttribute('transform','translate('+(dx/d*m)+','+(dy/d*m)+')');});
  });

  // simulasi banjir
  var lv=document.getElementById('level'),fill=document.getElementById('fill'),
      duck=document.getElementById('duck'),st=document.getElementById('status'),cm=document.getElementById('cm');
  function upd(){
    var v=+lv.value;
    fill.style.height=v+'%';
    duck.style.bottom=Math.max(4,v-8)+'%';
    cm.textContent='Tinggi air: '+v+'%';
    if(v<40){st.textContent='Aman, bebek santai 😎';fill.style.background='var(--water)';}
    else if(v<70){st.textContent='Waspada, bebek mulai melayang 🦆';fill.style.background='var(--water)';}
    else{st.textContent='BANJIR! Notifikasi dikirim ke HP 🚨';fill.style.background='#E5484D';}
  }
  lv.addEventListener('input',upd);upd();
})();
