function getGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

function startGrading() {
    const subjects = ["HTML", "CSS", "JavaScript"];
    let total = 0;

    for (let i = 0; i < subjects.length; i++) {
        let score;

        while (true) {
            const input = prompt(`📝 ${subjects[i]} 점수를 입력하세요. (0~100)`);

            if (input === null) {
                alert("🚪 성적 계산을 취소했습니다.");
                return;
            }

            score = parseInt(input);

            if (isNaN(score) || score < 0 || score > 100) {
                alert("⚠️ 0~100 사이의 숫자를 입력해주세요!");
                continue;
            }

            break;
        }

        total += score;
    }

    const average = total / subjects.length;
    const isPass = average >= 60;
    const grade = getGrade(average);

    const resultMessage =
        "📊 채점 결과 [60점 이상 합격]\n\n" +
        "총점: " + total + "점\n" +
        "평균: " + average.toFixed(1) + "점\n" +
        "등급: " + grade + "\n\n" +
        (isPass ? "🎉 합격입니다!" : "😢 불합격입니다.");

    alert(resultMessage);
}
