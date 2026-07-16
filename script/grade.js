function calculateGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var total = 0;

    for (var i = 0; i < subjects.length; i++) {
        var input = prompt(subjects[i] + " 점수를 입력하세요. (0 - 100)");

        if (input === null) {
            return;
        }

        if (input.trim() === "" || isNaN(Number(input))) {
            alert("숫자만 입력해주세요.");
            i--;
            continue;
        }

        if (input > 100 || input < 0) {
            alert("1부터 100까지의 숫자를 입력해주세요.");
            i--;
            continue;
        }

        total += Number(input);
    }

    var average = total / subjects.length;
    var result = average >= 60 ? "합격" : "불합격";

    alert("총점: " + total + "점, 평균: " + average.toFixed(1) + "점, 결과: " + result);
}