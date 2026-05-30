// [숙제12] 인문학 데이터 시각화
// 2022-17796 이호윤

// Q1
fetch("/data/sillok.json")
    .then(response => response.json())
    .then(records => {
        // drawChart 부분 함수 없이 작성
        //.map을 사용하여 ["태조", "태종", ...]와 [15,36, ...]을 생성
        const labels = records.map(r => r.king);
        const counts = records.map(r => r.volumes);

        const canvas = document.querySelector("#q1-chart");

        new Chart(canvas, {
            type: "bar", // 막대그래프 형식
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
                    title: { display: true, text: "조선왕조실록 왕대별 권수" }
                },
                scales: {
                    y: { beginAtZero: true }
                },
            },
        });
    });

// Q2
fetch("/data/nobel-literature.csv")
    .then(response => response.text())
    .then(csv => {
        const rows = csv
            .split("\n")
            .slice(1)                           // 헤더 뗴
            .filter(line => line.trim() !== "") // 빈 줄 제거
            .map(line => {
                const cols = line.split(",");
                return {
                    decade: Number(cols[0]), // decade,count
                    count: Number(cols[1]),
                };
            });
    
        // drawChart 부분 함수 없이 작성
        const labels = rows.map(r => `${r.decade}년대`);
        const counts = rows.map(r => r.count);
        
        const canvas = document.querySelector("#q2-chart");
        
        new Chart(canvas, {
            type: "line", // 꺾은선그래프 형식
            data: {
                labels: labels,
                datasets: [{
                    label: "수상자 수",
                    data: counts,
                    borderColor: "rgba(54, 162, 235, 1)", // 선 색상 지정
                    backgroundColor: "rgba(54, 162, 235, 0.2)", // 점,채움 색
                }]
            },
            options: {
                plugins: {
                    title: {display: true, text: "노벨문학상 수상자 수 추이 (10년 단위)"}
                },
                scales: {
                    x: {title: {display: true, text: "연대"}},
                    y: {beginAtZero: true, title: { display: true, text: "수상자 수"}}
                },
            },
        });
    });