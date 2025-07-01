function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  // Sync Locomotive Scroll with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // Refresh Locomotive Scroll and ScrollTrigger
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

// Custom Cursor
const crsr = document.querySelector(".cursor");
const main = document.querySelector(".main");

document.addEventListener("mousemove", (dets) => {
  crsr.style.left = `${dets.x + 8}px`;
  crsr.style.top = `${dets.y + 8}px`;
});

// Video Hover Effects
const video = document.querySelectorAll("video");

video.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    crsr.style.width = "60px";
    crsr.style.borderRadius = "42%";
    crsr.style.backgroundColor = "#a896b0";
    crsr.style.mixBlendMode = "none";
    crsr.innerHTML = "Hello";
  });

  e.addEventListener("mouseleave", () => {
    crsr.style.width = "16px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundColor = "#edbfff";
    crsr.style.mixBlendMode = "difference";
    crsr.innerHTML = "";
  });
});

var boxes = document.querySelectorAll(".page5 .box");
boxes.forEach((elem) => {
  var url = elem.getAttribute("data-image");
  elem.addEventListener("mouseenter", function () {
    crsr.style.height = "200px";
    crsr.style.width = "200px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${url})`;
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.height = "16px";
    crsr.style.width = "16px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

var navLinks = document.querySelectorAll("nav ul li");
var scrollingText = document.querySelector(".scrolling-text");
var purpleScreen = document.querySelector("#purple");
navLinks.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
    for (var i = 0; i < 10; i++) {
      scrollingText.innerHTML += `<span>${elem.innerHTML}</span>`;
    }
var scrollingTextWidth = scrollingText.scrollWidth;
gsap.to(".scrolling-text", {
  x: -scrollingTextWidth / 2,
  duration: 30,
  ease: "linear",
  repeat: -1,
});
    purpleScreen.style.zIndex = 100;
    purpleScreen.style.opacity = 1;
  });

  elem.addEventListener("mouseleave", function () {
    purpleScreen.style.zIndex = -1;
    purpleScreen.style.opacity = 0;
    scrollingText.innerHTML = ''
  });
});


// GSAP Timelines
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 .headings h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0",
    scrub: 1,
  },
});

gsap.from(".page1 .headings h1", {
  x: -30,
  opacity: 0,
  fontSize: "2vw",
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".page1 .headings h2", {
  x: 30,
  opacity: 0,
  fontSize: "2vw",
  duration: 1.5,
  ease: "power2.out",
});

tl.to(".page1 h1", { x: -80 }, "anim")
  .to(".page1 h2", { x: 80 }, "anim")
  .to(".page1 video", { width: "95%" }, "anim");

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 75%",
    end: "top 50%",
    scrub: 3,
  },
});

t2.to(".main", { backgroundColor: "#fff" });

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4 .elem .text-div",
    scroller: ".main",
    // markers: true,
    start: "top 20%",
    end: "top 10%",
    scrub: 3,
  },
});

t3.to(".main", { backgroundColor: "#111" });


const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer .first",
    scroller: ".main",
    // markers: true,
    start: "top 20%",
    end: "top 10%",
    scrub: 3,
  },
});

t4.to('.main',{
  backgroundColor:"#edbfff"
})