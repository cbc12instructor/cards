/* var numbers = [
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
var suits = ["clubs", "diamond", "heart", "spades"]; */
var cardsInDeck = [
    "ace-clubs",
    "two-clubs",
    "three-clubs",
    "four-clubs",
    "five-clubs",
    "six-clubs",
    "seven-clubs",
    "eight-clubs",
    "nine-clubs",
    "ten-clubs",
    "jack-clubs",
    "queen-clubs",
    "king-clubs",
    "ace-diamond",
    "two-diamond",
    "three-diamond",
    "four-diamond",
    "five-diamond",
    "six-diamond",
    "seven-diamond",
    "eight-diamond",
    "nine-diamond",
    "ten-diamond",
    "jack-diamond",
    "queen-diamond",
    "king-diamond",
    "ace-heart",
    "two-heart",
    "three-heart",
    "four-heart",
    "five-heart",
    "six-heart",
    "seven-heart",
    "eight-heart",
    "nine-heart",
    "ten-heart",
    "jack-heart",
    "queen-heart",
    "king-heart",
    "ace-spades",
    "two-spades",
    "three-spades",
    "four-spades",
    "five-spades",
    "six-spades",
    "seven-spades",
    "eight-spades",
    "nine-spades",
    "ten-spades",
    "jack-spades",
    "queen-spades",
    "king-spades",
    "black-joker",
    "color-joker"
]
var cardsOnBoard = [];

function getCard() {
    var randomCard = cardsInDeck[Math.floor(Math.random() * cardsInDeck.length)];
    if (randomCard != undefined) {
        cardsOnBoard.push(randomCard);
        cardsInDeck.splice(cardsInDeck.indexOf(randomCard), 1);
        randomCard= "card " + randomCard;       
        randomCard = randomCard.replace("-", " ");
        return randomCard;
    }
}


function reDraw() {
    for (i = 0; i = cardsOnBoard.length; i++) {
        cardsInDeck.push(cardsOnBoard[0]);
        cardsOnBoard.splice(0, 1);
    }
    for (i = 1; i < document.getElementById("hand").childElementCount; i++) {
        document.getElementById("card" + i).className = getCard();
    }
}

function newCard() {
    var randomCard = getCard();
    var node = document.createElement("div")
    node.id = "card" + (document.getElementById("hand").childElementCount);
    node.setAttribute("class", randomCard);    
    document.getElementById("hand").appendChild(node);
    document.getElementById("new-card").innerText = cardsInDeck.length
}