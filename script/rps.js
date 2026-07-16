function startRockPaperScissors() {
    var options = ["가위", "바위", "보"];
    var wins = 0;
    var losses = 0;
    var draws = 0;

    while (true) {
        var input = prompt("가위, 바위, 보 중 하나를 입력하세요. (그만하려면 취소)");

        if (input === null) {
            break;
        }

        if (options.indexOf(input) === -1) {
            alert("가위, 바위, 보 중에서만 입력해주세요.");
            continue;
        }

        var computerChoice = options[Math.floor(Math.random() * options.length)];
        var result;

        if (input === computerChoice) {
            result = "비겼습니다!";
            draws++;
        } else if (
            (input === "가위" && computerChoice === "보") ||
            (input === "바위" && computerChoice === "가위") ||
            (input === "보" && computerChoice === "바위")
        ) {
            result = "이겼습니다!";
            wins++;
        } else {
            result = "졌습니다!";
            losses++;
        }

        alert("나: " + input + " / 컴퓨터: " + computerChoice + "\n" + result);
    }

    alert("게임 종료! 전적 - 승: " + wins + ", 패: " + losses + ", 무: " + draws);
}
