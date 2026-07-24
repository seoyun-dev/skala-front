function startUpDownGame() {
    const computerNum = Math.floor(Math.random() * 50) + 1;
    let tryNum = 0;

    while (true) {
        const input = prompt("🔢 1부터 50 사이, 컴퓨터가 생각한 숫자를 맞혀보세요!");

        if (input === null) {
            alert("🚪 게임을 취소했습니다.");
            return;
        }

        const userNum = parseInt(input);

        if (isNaN(userNum)) {
            alert("⚠️ 숫자를 입력해주세요!");
            continue;
        }

        tryNum++;

        if (userNum > computerNum) {
            alert("📉 Down! 컴퓨터가 생각한 숫자는 더 낮아요!");
        } else if (userNum < computerNum) {
            alert("📈 Up! 컴퓨터가 생각한 숫자는 더 높아요!");
        } else {
            alert(`🎉 축하합니다! ${tryNum}번 만에 맞추셨습니다.`);
            break;
        }
    }
}
