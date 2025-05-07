function loadGoogleTranslate() {
    new google.translate.TranslateElement("google_element");

}

gsap.to(".loader", {
    top: "-100vh", 
    
    delay: 1,
    duration: 1,

})

gsap.from("nav ul li", {
    y: -110,
    duration: 1,
    delay: 1,
    stagger: 0.3,
    opacity: 0,

})
 

gsap.from(".main .j_main", {
    x: 700,
    duration: 1,
    delay: 1,
    stagger: .8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".cont",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "bottom 110%",
        scrub: 2,
        // pin: true,
    }

}) 





gsap.from(".j_submain", {
    x:-100,
    duration: 1,
    delay: 4,
    stagger: 0.3,
    opacity: 0,
})

gsap.from(".product", {
    x: 500,
    y:500,
    duration: 1,
    delay: 5,
    stagger: 0.3,
    opacity: 0,
})

gsap.from(".category .main_product", {
    y: 700,
    duration: 1.5,
    delay: 1,
    stagger: .8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "bottom 110%",
        scrub: 2,
        // pin: true,
    }

}) 