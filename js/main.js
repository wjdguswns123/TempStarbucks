// 뱃지 스크롤 처리.
const badgeElement = document.querySelector("header .badges");
const toTopElement = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(() => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeElement, 0.6, {
      opacity: 0,
      display: "none"
    });

    gsap.to(toTopElement, 0.2, {
      x: 0
    });
  }
  else {
    gsap.to(badgeElement, 0.6, {
      opacity: 1,
      display: "block"
    });

    gsap.to(toTopElement, 0.2, {
      x: 100
    });
  }
}, 300));

toTopElement.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});


// Visual 이미지들 애니메이션 처리.
const fadeElements = document.querySelectorAll(".visual .fade-in");
fadeElements.forEach((element, index) => {
  gsap.to(element, 1, {
    delay: ++index * 0.7,
    opacity: 1
  });
});


// 공지 스와이프.
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});

new Swiper(".promotion .swiper", {
  // direction: "horizontal"
  slidesPerView: 3,   // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10,   // 슬라이드 사이 여백.
  centeredSlides: true,   // 슬라이드 시작점.
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: ".promotion .swiper-pagination",  // 페이지 번호 요소 선택자.
    clickable: true                       // 사용자의 페이지 번호 요소 제어 가능 여부.
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
});


const promotionElement = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  // promotionElement.setAttribute("display", isHidePromotion ? "none" : "");

  if (isHidePromotion) {
    promotionElement.classList.add("hide");
  }
  else {
    promotionElement.classList.remove("hide");
  }
});


function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, distanse) {
  gsap.to(selector, random(1.5, 2.5), {
    y: distanse,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay)
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);


const spyElements = document.querySelectorAll("section.scroll-spy");
spyElements.forEach((element) => {
  new ScrollMagic
    .Scene({
      triggerElement: element,
      triggerHook: 0.8
    })
    .setClassToggle(element, "show")
    .addTo(new ScrollMagic.Controller());
});