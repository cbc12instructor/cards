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
    var randomNumber = Math.floor(Math.random() * numbers.length);
    console.log(numbers[randomNumber]);
    var randomSuit = Math.floor(Math.random() * suits.length);
    console.log(suits[randomSuit]);
    var randomCard = "card " + numbers[randomNumber] + " " + suits[randomSuit];
    console.log(randomCard);
    document.getElementById("card1").className = randomCard;
}