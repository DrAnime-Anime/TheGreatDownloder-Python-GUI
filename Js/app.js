function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["Instragram", "Facebook", "Pinterest"];
  const el = document.getElementById("typing");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };

  writeLoop();


  const slider = document.querySelector('.slider')
  const sections = gsap.utils.toArray(".slider section")

  let t1 = gsap.timeline({
    defaults: {
      ease: "none"
    },
    ScrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: 2,
      end: () => "+=" + slider.offsetWidth
    }
  })


  t1.to(slider, {
    xPercent: -66
  })

  const lenis = new lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)