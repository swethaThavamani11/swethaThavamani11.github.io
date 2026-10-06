const menu=document.querySelector(".menu"),links=document.querySelector(".links");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll('.links a[href^="#"]').forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const items=document.querySelectorAll(".section,.work-card,.skill,.glass-panel");
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("seen");observer.unobserve(e.target)}}),{threshold:.08});
items.forEach(i=>{i.classList.add("reveal-item");observer.observe(i)});
