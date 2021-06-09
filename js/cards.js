var numbers = [
    "ace",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "jack",
    "queen",
    "king",
];
var suits = ["clubs", "diamond", "heart", "spades"];

function reroll() {
    for (i = 1; i < document.getElementById("hand").childElementCount; i++) {
        var randomNumber = Math.floor(Math.random() * numbers.length);
        var randomSuit = Math.floor(Math.random() * suits.length);
        var randomCard = "card " + numbers[randomNumber] + " " + suits[randomSuit];
        document.getElementById("card" + i).className = randomCard;
    }
}
reroll();

function newCard() {
    var node = document.createElement("div")
    node.id = "card" + (document.getElementById("hand").childElementCount);
    var randomNumber = Math.floor(Math.random() * numbers.length);
    var randomSuit = Math.floor(Math.random() * suits.length);
    var randomCard = "card " + numbers[randomNumber] + " " + suits[randomSuit];
    node.setAttribute("class", randomCard);
    //node.appendChild(textnode);
    document.getElementById("hand").insertBefore(node, document.getElementById("new-card"));
}
