const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.getElementById('year').textContent=new Date().getFullYear();
