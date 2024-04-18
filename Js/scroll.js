
const slider = document.querySelector('.slider')
const sections = gsap.utils.toArray(".slider section")

let tl = gsap.timeline({
  defaults: {
    ease: "none"
  },
  ScrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth
  },
})


twl.to(slider, {
  xPercent: -66
})

const lenis = new lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)