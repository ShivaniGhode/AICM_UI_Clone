gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

function homepageAnimation() {
  tl.from("nav", {
    y: 50,
    opacity: 0,
    delay: 0.5,
  });

  tl.from(".middle h1", {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(".middle p", {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(".search", {
    yPercent: 100,
    opacity: 0,
  });
}

homepageAnimation();

// Category animation
function categoryPageAnimation() {
  gsap.from(".category .categoryHead", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".category",
      start: "top 25%",
    },
  });

  gsap.from(".category .card", {
    y: 150,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".category",
      start: "top 25%",
    },
  });
}

categoryPageAnimation();

// Swiper
let swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  autoplay: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
