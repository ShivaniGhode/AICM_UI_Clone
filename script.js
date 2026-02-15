let tl = gsap.timeline();

tl.from("nav", {
    y: 50,
    opacity: 0,
    delay: 0.5
});

tl.from(".middle h1", {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2
});

tl.from(".middle p", {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2
});

tl.from(".search", {
    yPercent: 100,
    opacity: 0
});
