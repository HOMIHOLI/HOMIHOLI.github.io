// [숙제12] 인문학 데이터 시각화
// 2022-17796 이호윤

// Q1
fetch("/data/sillok.json")
    .then(response => response.json())
    .then(records => {
    //.map을 사용하여 ["태조", "태종", ...]와 [15,36, ...]을 생성
    const labels = records.map(r => r.king);
    const counts = records.map(r => r.volumes);

    const canvas = document.querySelector("#q1-chart");

    new Chart(canvas, {
        type: "bar", // 막대그래프 형식 지정 [1]
        data: {
            labels: labels,
            datasets: [{
                label: "권수",
                data: counts,
                backgroundColor: "rgba(54, 162, 235, 0.6)"
            }]
        },
        options: {
            plugins: {
                title: {display: true, text: "조선왕조실록 왕대별 권수"}
            },
        scales: {
            y: {beginAtZero: true}
        }
      }
    });
    });

    // Q2
fetch("/data/nobel-literature.csv")
    .then(response => response.text())
    .then(csv => {

    });