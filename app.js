const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

window.addEventListener("scroll", () => {
  // console.log("Hello");
  if (!skillsPlayed) skillsCounter();
  if (!mlPlayed) mlCounter();
});

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;
  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}

// Sticky navbar
function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
  //   console.log(window.pageYOffset > 0);
  //whenever y offset >0 the class of the header element will get activated...
}
stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

// Reveal Animation

let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});
//we passed an object in this to change the default configuration
sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });
//NEED TO UNDERSTAND!!!

// Skills Bar Progress Animation
function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  // if (window.innerHeight >= topPosition + el.offsetHeight) {
  //   // console.log("You've reached the skills section");
  //   return true;
  // } else {
  //   return false;
  // }

  if (window.innerHeight >= topPosition + el.offsetHeight) return true;
  return false;
  // console.log(topPosition);
}

let skillsPlayed = false;
function skillsCounter() {
  // console.log("You've reached the skills section");
  // console.log(hasReached(first_skill));
  //for stroke
  if (!hasReached(first_skill)) return;

  skillsPlayed = true;

  sk_counters.forEach((counter, i) => {
    let target = +counter.dataset.target; //+ is done to change the string datatype to number
    let strokeValue = 427 - 427 * (target / 100);
    // console.log(strokeValue);
    progress_bars[i].style.setProperty("--target", strokeValue);
    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });

  //for actual percentage in number

  //for stroke
  progress_bars.forEach(
    (p) => (p.style.animation = "progress 2s ease-in-out forwards")
  );
}

//Services Counter Animation

let mlPlayed = false;

function mlCounter() {
  if (!hasReached(ml_section)) return;
  mlPlayed = true;
  // console.log("You've reached the ml section");
  ml_counters.forEach((ctr) => {
    let target = +ctr.dataset.target;
    // console.log(target);
    setTimeout(() => {
      updateCount(ctr, target);
    }, 400);
  });
}

//-----Portfolio Filter Animation-------------//

var mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".prt-card",
  },
  animation: {
    duration: 500,
  },
});
