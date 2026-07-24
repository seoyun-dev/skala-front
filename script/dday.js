(function () {
    const START_DATE = new Date(2026, 6, 14); // SKALA 입과 (7월은 6)
    const END_DATE = new Date(2026, 11, 18); // SKALA 수료 (12월은 11)

    function formatDday(target) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const targetMidnight = new Date(target);
        targetMidnight.setHours(0, 0, 0, 0);

        const diffDays = Math.round((targetMidnight - today) / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "D-Day";
        if (diffDays > 0) return "D-" + diffDays;
        return "D+" + Math.abs(diffDays);
    }

    document.addEventListener("DOMContentLoaded", function () {
        const startEl = document.getElementById("dday-start");
        const endEl = document.getElementById("dday-end");

        if (startEl) startEl.textContent = formatDday(START_DATE);
        if (endEl) endEl.textContent = formatDday(END_DATE);
    });
})();
