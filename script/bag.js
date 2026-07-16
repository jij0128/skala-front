function showMyBag() {
    var myBag = [
        { name: "노트북", count: 1 },
        { name: "태블릿", count: 1 },
        { name: "텀블러", count: 1 },
        { name: "지갑", count: 1 },
        { name: "충전기", count: 1 },
    ];

    var result = "What's in MY BAG?\n\n";

    for (var i = 0; i < myBag.length; i++) {
        result += "- " + myBag[i].name + ": " + myBag[i].count + "개\n";
    }

    alert(result + "\n총 물품 종류: " + myBag.length + "개");
}