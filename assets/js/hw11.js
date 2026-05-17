// [숙제11] 동적 웹 페이지 구현
// 2022-17796 이호윤

// Q1
const themeBtn = document.querySelector("#theme-btn");
const q1Box = document.querySelector("#q1-box");

themeBtn.addEventListener("click", () => {
    q1Box.classList.toggle("dark");
    if (q1Box.classList.contains("dark")) {
        themeBtn.textContent = "라이트 모드";
    } else {
        themeBtn.textContent = "다크 모드";
    }
});