// NOTE: Intersection Observer API 연습
console.log("시작한다");

// NOTE: 타겟팅
const testheader = document.querySelector(".header");

const moveBtn = (e) => {
  const heroBtn = document.querySelector(".btn");
  console.log("버튼이움직임");
  console.log("evnet", e);
  if (!e[0].isIntersecting) {
    heroBtn.classList.add("floating");
    console.log("헤더가 안보임");
  }

  if (e[0].isIntersecting) {
    heroBtn.classList.remove("floating");
    console.log("헤더가 보임");
  }
};

// NOTE: 옵저버가 객체생성

const moveBtnIntersectionObs = new IntersectionObserver(moveBtn);
// NOTE: 옵저버가 계속관찰
moveBtnIntersectionObs.observe(testheader);
