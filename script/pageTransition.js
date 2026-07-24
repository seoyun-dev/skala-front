const CHAPTER_NAMES = {
    "index.html": "박서윤의 이야기",
    "myProfile.html": "소개",
    "myClass.html": "수업 시간표",
    "myHoliday.html": "휴일 일과",
    "myTrip.html": "여행 앨범",
    "signUp.html": "회원가입",
    "signUpResult.html": "회원가입 완료"
};

const overlay = document.createElement("div");
overlay.className = "page-transition-overlay";
overlay.innerHTML = `
    <img src="../media/book.gif" alt="책장이 넘어가는 중">
    <p class="transition-text"></p>
`;
document.body.appendChild(overlay);

const transitionText = overlay.querySelector(".transition-text");

function renderWaveText(message) {
    transitionText.innerHTML = "";
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const span = document.createElement("span");
        span.textContent = char === " " ? " " : char;
        span.style.animationDelay = `${i * 0.06}s`;
        transitionText.appendChild(span);
    }
}

function showOverlay(message) {
    renderWaveText(message);
    overlay.classList.add("show");
}

document.querySelectorAll(".book-tab").forEach((tab) => {
    tab.addEventListener("click", (event) => {
        event.preventDefault();

        if (tab.classList.contains("active")) {
            return;
        }

        const href = tab.getAttribute("href");
        const chapterName = CHAPTER_NAMES[href] || "다음 페이지";
        showOverlay(`${chapterName} 챕터로 이동 중`);

        setTimeout(() => {
            location.href = href;
        }, 650);
    });
});
