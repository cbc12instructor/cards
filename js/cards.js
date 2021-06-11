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
	var randIndex = Math.floor(Math.random() * cardsInDeck.length);
    var randomCard = cardsInDeck[randIndex];
	console.log('we have picked -' + randomCard + ' with random index:' + randIndex);
    if (randomCard != undefined) {
        cardsOnBoard.push(randomCard);
        cardsInDeck.splice(cardsInDeck.indexOf(randomCard), 1);
        randomCard= "card " + randomCard;       
        randomCard = randomCard.replace("-", " ");
		console.log(randomCard);
        return randomCard;
    } else {
		console.warn('Hey, this card is invalid - ' + randIndex);
		return false;
	}
}


function reDraw() {

	console.time('Original Version');
	//cardsInDeck = cardsInDeck.concat(cardsOnBoard);
	//cardsOnBoard = [];

    for (i = 0; i = cardsOnBoard.length; i++) {
        cardsInDeck.push(cardsOnBoard[0]);
        cardsOnBoard.splice(0, 1);
    }
	
	console.timeEnd('Original Version');
	
	// todo(this can operate on cards that aren't really cards)
    for (i = 1; i < document.getElementById("hand").childElementCount; i++) {
        document.getElementById("card" + i).className = getCard();
    }
}

function newCard() {
    var randomCard = getCard();
	if ( randomCard ) {
		var node = document.createElement("div")
		node.id = "card" + (document.getElementById("hand").childElementCount);
		node.setAttribute("class", randomCard);    
		document.getElementById("hand").appendChild(node);
		document.getElementById("new-card").innerText = cardsInDeck.length;
	}
}