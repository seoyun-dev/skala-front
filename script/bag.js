// HTML에서 onclick="showMyBag()"을 호출하면 실행됩니다.
function showMyBag() {
    const myBag = {
        "📱 스마트폰": "1개",
        "💻 노트북": "1개",
        "📖 책": "1권",
        "🖊️ 펜": "3자루",
        "💧 물병": "1개",
        "🎧 이어폰": "1개",
        "🎽 요가복": "1세트"
    };

    const divider = "------------------------";
    let message = `🎒 내 가방 속 물건들 🎒\n${divider}\n`;
    let itemCount = 0;

    for (const item in myBag) {
        message += `${item} : ${myBag[item]}\n`;
        itemCount++;
    }

    message += `${divider}\n총 물품 종류: ${itemCount}가지`;

    alert(message);
}
