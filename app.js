const themeBtn=document.getElementById('themeBtn');
const saved=localStorage.getItem('waweb-theme');
if(saved==='dark')document.body.classList.add('dark');
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('waweb-theme',document.body.classList.contains('dark')?'dark':'light')});
document.getElementById('refreshBtn').addEventListener('click',()=>location.reload());
document.getElementById('backBtn').addEventListener('click',()=>{if(history.length>1)history.back();else location.href='./'});
if('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
