AOS.init();

new TypeIt("#type1", {
        speed: 120,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Student", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

new TypeIt("#type2", {
        speed: 120,
        loop: true,
        waitUntilVisible: true,
    })
    .type("Student", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
    opacity: 0,
    duration: 1,
    delay: 1.2,
    y: 30,
    stagger: 0.2,
});
gsap.from(".icons span", {
    opacity: 0,
    duration: 1,
    delay: 4,
    x: -30,
    stagger: 0.2,
});

const glide = document.querySelector(".glide");
if (glide)
    new Glide(glide, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();