// [숙제10] JavaScript 기초 연습
// 2022-17796 이호윤

// Q1 작품 시대를 돌려주는 함수
function classifyEra(year) {
  if (year < 1910) {
    return "개화기 이전";
  } else if (year < 1945) {
    return "일제강점기";
  } else if (year < 1990) {
    return "해방 이후–현대";
  } else {
    return "동시대";
  }
}


// Q2 배열과 배열 메서드
const works = ["날개", "오감도", "지주회시", "종생기", "권태"];

console.log(works.length);
console.log(works[0]);
console.log(works[works.length - 1]);

const titled = works.map(work => `「${work}」`);
console.log(titled);

const long = works.filter(work => work.length >= 3);
console.log(long);

for (let i = 0; i < long.length; i++) {
  console.log(`${i + 1}번째 작품: ${long[i]}`);
}