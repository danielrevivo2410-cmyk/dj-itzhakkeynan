const header=document.getElementById('header');
const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.classList.toggle('active')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.classList.remove('active')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.getElementById('lightbox');const lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightboxImg.src=item.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src=''}
document.getElementById('lightboxClose').addEventListener('click',closeBox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const name=data.get('name')||'';
  const phone=data.get('phone')||'';
  const date=data.get('date')||'לא צוין';
  const type=data.get('type')||'לא צוין';
  const message=data.get('message')||'אין הודעה נוספת';
  const text=`שלום יצחק, אשמח לבדוק זמינות לאירוע.\n\nשם: ${name}\nטלפון: ${phone}\nתאריך: ${date}\nסוג אירוע: ${type}\nפרטים: ${message}`;
  const url='https://wa.me/972506000337?text='+encodeURIComponent(text);
  window.open(url,'_blank','noopener');
  document.getElementById('formStatus').textContent='מעולה! נפתחה שיחת WhatsApp עם פרטי האירוע. 🎧';
});
