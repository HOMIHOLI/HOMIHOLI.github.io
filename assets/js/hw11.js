// [숙제11] 동적 웹 페이지 구현
// 2022-17796 이호윤

// Q1
const themeBtn = document.querySelector("#theme-btn");
const q1Box = document.querySelector("#q1-box");

// 아래 코드는 제미나이의 도움을 받아서 작성하였습니다. https://gemini.google.com/share/ea74cd692019
themeBtn.addEventListener("click", () => {
    q1Box.classList.toggle("dark");
    if (q1Box.classList.contains("dark")) {
        themeBtn.textContent = "라이트 모드";
    } else {
        themeBtn.textContent = "다크 모드";
    }
});

// Q2
const q2Input = document.querySelector("#q2-input");
const q2Count = document.querySelector("#q2-count");
const q2Warn = document.querySelector("#q2-warn");

// 아래 코드는 제미나이의 도움을 받아서 작성하였습니다. https://gemini.google.com/share/ea74cd692019
q2Input.addEventListener("input", (e) => {
    const len = e.target.value.length;
    q2Count.textContent = len;
    if (len >= 100) {
        q2Warn.textContent = "100자를 넘었습니다.";
        q2Warn.style.color = "crimson";
    } else {
        q2Warn.textContent = "";
    }
});