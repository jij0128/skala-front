function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var tries = 0;
    var guess;

    while (true) {
        var input = prompt("1부터 50 사이의 숫자를 입력하세요.");

        if (input === null) {
            break;
        }

        if (input.trim() === "" || isNaN(Number(input))) {
            alert("숫자만 입력해주세요.");
            continue;
        }

        guess = Number(input);

        if (guess < 1 || guess > 50) {
            alert("1부터 50 사이의 숫자를 입력해주세요.");
            continue;
        }

        tries++;

        if (guess > computerNum) {
            alert("Down!" + " (" + tries + "트)");
        } else if (guess < computerNum) {
            alert("Up!" + " (" + tries + "트)");
        } else {
            var bestTries = localStorage.getItem("upDownBestTries");
            var message = "축하합니다! " + tries + "번 만에 맞추셨습니다.";

            if (bestTries === null || tries < Number(bestTries)) {
                localStorage.setItem("upDownBestTries", tries);
                message += "\n🎉 신기록입니다!";
            } else {
                message += "\n최고 기록: " + bestTries + "번";
            }

            alert(message);
            break;
        }
    }
}