/* =========================
   GSAP
========================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO ANIMATION
========================= */

gsap.from(".navbar",{

  y:-80,

  opacity:0,

  duration:1.2,

  ease:"power4.out"

});

gsap.from(".hero-left > *",{

  y:80,

  opacity:0,

  stagger:0.15,

  duration:1.2,

  ease:"power4.out"

});

gsap.from(".card1",{

  x:120,

  opacity:0,

  rotate:0,

  duration:1.4

});

gsap.from(".card2",{

  x:160,

  opacity:0,

  rotate:0,

  duration:1.6

});

gsap.from(".card3",{

  x:200,

  opacity:0,

  rotate:0,

  duration:1.8

});

/* =========================
   FLOATING CARDS
========================= */

gsap.to(".card1",{

  y:-20,

  repeat:-1,

  yoyo:true,

  duration:4,

  ease:"sine.inOut"

});

gsap.to(".card2",{

  y:-28,

  repeat:-1,

  yoyo:true,

  duration:5,

  ease:"sine.inOut"

});

gsap.to(".card3",{

  y:-18,

  repeat:-1,

  yoyo:true,

  duration:4.5,

  ease:"sine.inOut"

});

/* =========================
   SECTION REVEALS
========================= */

gsap.utils.toArray("section").forEach((section)=>{

  gsap.from(section,{

    scrollTrigger:{

      trigger:section,

      start:"top 78%"

    },

    y:100,

    opacity:0,

    duration:1.2,

    ease:"power4.out"

  });

});

/* =========================
   GALLERY HOVER
========================= */

const galleryItems =
document.querySelectorAll(".gallery-item");

galleryItems.forEach((item)=>{

  item.addEventListener("mouseenter",()=>{

    gsap.to(item,{

      y:-10,

      duration:0.4

    });

  });

  item.addEventListener("mouseleave",()=>{

    gsap.to(item,{

      y:0,

      duration:0.4

    });

  });

});

/* =========================
   LIGHTBOX
========================= */

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

const galleryImages =
document.querySelectorAll(".gallery-item img");

galleryImages.forEach((img)=>{

  img.addEventListener("click",()=>{

    lightbox.classList.add("active");

    lightboxImage.src =
    img.src;

  });

});

closeLightbox.addEventListener("click",()=>{

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

  if(e.target === lightbox){

    lightbox.classList.remove("active");

  }

});

/* =========================
   MEMORY GENERATOR
========================= */

const memoryBtn =
document.getElementById("generateBtn");

const memoryImage =
document.getElementById("memoryImage");

const memoryText =
document.getElementById("memoryText");

const memories = [

  {

    image:"photos/photo1.jpg",

    text:"some people slowly become part of your atmosphere."

  },

  {

    image:"photos/photo2.jpg",

    text:"certain memories never really leave."

  },

  {

    image:"photos/photo3.jpg",

    text:"late night conversations hit different."

  },

  {

    image:"photos/photo4.jpg",

    text:"comfort sometimes looks like a person."

  },

  {

    image:"photos/photo5.jpg",

    text:"some memories feel cinematic forever."

  }

];

memoryBtn.addEventListener("click",()=>{

  const random =
  memories[Math.floor(Math.random()*memories.length)];

  gsap.to(".memory-card",{

    opacity:0,

    y:40,

    duration:0.3,

    onComplete:()=>{

      memoryImage.src =
      random.image;

      memoryText.textContent =
      random.text;

      gsap.to(".memory-card",{

        opacity:1,

        y:0,

        duration:0.6

      });

    }

  });

});

/* =========================
   PARTICLES
========================= */

gsap.to(".particles",{

  backgroundPosition:"200px 200px",

  repeat:-1,

  duration:20,

  ease:"linear"

});

/* =========================
   NAVBAR EFFECT
========================= */

window.addEventListener("scroll",()=>{

  const navbar =
  document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.background =
    "rgba(6,8,14,0.82)";

  }

  else{

    navbar.style.background =
    "rgba(7,9,15,0.32)";

  }

});

/* =========================
   LOADER
========================= */

window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  const loaderProgress =
  document.getElementById("loaderProgress");

  const loaderText =
  document.getElementById("loaderText");

  let count = 0;

  const loading = setInterval(()=>{

    count++;

    loaderProgress.style.width =
    count + "%";

    loaderText.innerHTML =
    count + "%";

    if(count >= 100){

      clearInterval(loading);

      setTimeout(()=>{

        loader.classList.add("hide");

      },500);

    }

  },20);

});