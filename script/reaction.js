var reactionBtn = document.getElementById("reactionBtn");
var reactionState = "idle";
var startTime;
var timeoutId;

reactionBtn.addEventListener("click", function () {
    if (reactionState === "idle") {
        reactionState = "waiting";
        reactionBtn.textContent = "기다리세요...";
        reactionBtn.style.backgroundColor = "#e74c3c";

        var delay = Math.floor(Math.random() * 3000) + 1000;

        timeoutId = setTimeout(function () {
            reactionState = "ready";
            reactionBtn.textContent = "지금 클릭!";
            reactionBtn.style.backgroundColor = "#27ae60";
            startTime = Date.now();
        }, delay);

    } else if (reactionState === "waiting") {
        clearTimeout(timeoutId);
        reactionState = "idle";
        reactionBtn.textContent = "반응속도 테스트";
        reactionBtn.style.backgroundColor = "";
        alert("너무 빨리 눌렀습니다! 초록색으로 바뀔 때까지 기다려주세요.");

    } else if (reactionState === "ready") {
        var reactionTime = Date.now() - startTime;
        reactionState = "idle";
        reactionBtn.textContent = "반응속도 테스트";
        reactionBtn.style.backgroundColor = "";

        var bestTime = localStorage.getItem("reactionBestTime");
        var message = "반응 속도: " + reactionTime + "ms";

        if (bestTime === null || reactionTime < Number(bestTime)) {
            localStorage.setItem("reactionBestTime", reactionTime);
            message += "\n🎉 신기록입니다!";
        } else {
            message += "\n최고 기록: " + bestTime + "ms";
        }

        alert(message);
    }
});
