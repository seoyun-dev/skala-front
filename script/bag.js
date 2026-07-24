function showMyBag() {
    const myBag = [
        { name: "📱 스마트폰", quantity: "1개" },
        { name: "💻 노트북", quantity: "1개" },
        { name: "📖 책", quantity: "1권" },
        { name: "🖊️ 펜", quantity: "3자루" },
        { name: "💧 물병", quantity: "1개" },
        { name: "🎧 이어폰", quantity: "1개" },
        { name: "🎽 요가복", quantity: "1세트" }
    ];

    const divider = "------------------------";
    let message = `🎒 내 가방 속 물건들 🎒\n${divider}\n`;

    for (const item of myBag) {
        message += `${item.name} : ${item.quantity}\n`;
    }

    message += `${divider}\n총 물품 종류: ${myBag.length}가지`;

    alert(message);
}
