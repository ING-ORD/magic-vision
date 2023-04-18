window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin)
let tl = gsap.timeline({repeat:-1});

tl.to(".layers__caption", {duration: 2, text: "Детство"});
tl.to(".layers__caption", {duration: 3, text: "Детство"});
tl.to(".layers__caption", {duration: 1, text: ""});

tl.to(".layers__caption", {duration: 2, text: "эзотерика"});
tl.to(".layers__caption", {duration: 3, text: "эзотерика"});
tl.to(".layers__caption", {duration: 1, text: ""});

tl.to(".layers__caption", {duration: 2, text: "Религия"});
tl.to(".layers__caption", {duration: 3, text: "Религия"});
tl.to(".layers__caption", {duration: 1, text: ""});

tl.to(".layers__caption", {duration: 2, text: "Жизнь обычного человека в России"});
tl.to(".layers__caption", {duration: 3, text: "Жизнь обычного человека в России"});
tl.to(".layers__caption", {duration: 1, text: ""});

tl.to(".layers__caption", {duration: 2, text: "киноискусство"});
tl.to(".layers__caption", {duration: 3, text: "киноискусство"});
tl.to(".layers__caption", {duration: 1, text: ""});

tl.to(".layers__caption", {duration: 2, text: "типы магического мышления"});
tl.to(".layers__caption", {duration: 3, text: "типы магического мышления"});
tl.to(".layers__caption", {duration: 1, text: ""});

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
