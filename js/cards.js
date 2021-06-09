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
    for (i = 1; i < document.getElementById("hand").childElementCount+1; i++) {
        var randomNumber = Math.floor(Math.random() * numbers.length);
        var randomSuit = Math.floor(Math.random() * suits.length);
        var randomCard = "card " + numbers[randomNumber] + " " + suits[randomSuit];
        document.getElementById("card" + i).className = randomCard; 
    }
}
function newCard() {
    var node = document.createElement("div");
    var textnode = document.createTextNode("card" + document.getElementById("hand").childElementCount+1);
    node.appendChild(textnode);
    document.getElementById("hand").appendChild(node);
}
reroll();