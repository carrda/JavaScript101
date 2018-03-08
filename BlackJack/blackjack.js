// JS Code for Blackjack game

var suitArray = ["S", "H", "D", "C"];
var cardValueArray = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
var deckArray = [];

class Hand {
    constructor() {
        this.hand = [];
    }
    addCard(card) {
        this.hand.push(card);
        return this.hand;
    }
    getPoints() {
        let arrAces = [];
        let handPoints = 0;
        this.hand.forEach(function(card) {
            if (card.rank === 'A'){
                arrAces.push(card);
            } else {
                handPoints += card.points;
            }
        });
        arrAces.forEach(function(card) {
            if (handPoints > 10) {
                handPoints += 1;
            } else {
                handPoints += 11;
            }
        })
        return handPoints;
    }
}

class Card {
    constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.cardImageUrl = "Images/" + this.rank + this.suit + ".jpg"
    if (rank === "A") {
        this.points = 1;
    }
    else if (rank ==="K") {
        this.points = 10;
    }
    else if (rank ==="Q") {
        this.points = 10;
    }
    else if (rank ==="J") {
        this.points = 10;
    }
    else if (rank ==="10") {
        this.points = 10;
    }
    else if (rank ==="9") {
        this.points = 9;
    }
    else if (rank ==="8") {
        this.points = 8;
    }
    else if (rank ==="7") {
        this.points = 7;
    }
    else if (rank ==="6") {
        this.points = 6;
    }
    else if (rank ==="5") {
        this.points = 5;
    }
    else if (rank ==="4") {
        this.points = 4;
    }
    else if (rank ==="3") {
        this.points = 3;
    }
    else if (rank ==="2") {
        this.points = 2;
    }

}

}
// Build a deck of 52 Card objects
function createDeck() {
    for (var i = 0; i < cardValueArray.length; i ++) {
        for (var j = 0; j < suitArray.length; j ++) {
            var myCard = new Card(cardValueArray[i], suitArray[j]);
            deckArray.push(myCard);
        } 
    }
    shuffleArray(deckArray);
}

// this function shuffles an array in place.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class Deck {
    constructor(deck) {
        this.deck = deck;
    }
    draw() {
        return this.deck.pop();
    }
    numCardsLeft() {
        return this.deck.length;
    }
    displayDeck(){
        return this.deck;
    }
}

function startGame() {
    console.log('start game function');
    createDeck();
    dealerHand = new Hand();
    playerHand = new Hand();
    myDeck = new Deck(deckArray); //instantiating the object
}

startGame();

// dealer & player hands initialized to [] at start if code block
// ? then reinitialize these with "start new game"?
document.getElementById("deal-button").addEventListener("click", function(){

    for (i = 1; i < 3; i++) {
        // Dealer Hand
        var newCard = document.createElement("img");
        newCard.className = "cards";
        var card = myDeck.draw();
        dealerHand.addCard(card);
        newCard.setAttribute("src", card.cardImageUrl);
        var dHand = document.getElementById("dealer-hand");
        dHand.appendChild(newCard);


        // Player Hand
        var newCard = document.createElement("img");
        newCard.className = "cards";
        var card = myDeck.draw();
        playerHand.addCard(card);
        newCard.setAttribute("src", card.cardImageUrl);
        var pHand = document.getElementById("player-hand");
        pHand.appendChild(newCard);
    };
    var playerPoints = playerHand.getPoints();
    var dealerPoints = dealerHand.getPoints();
    document.getElementById("dealer-points").textContent = dealerPoints;
    document.getElementById("player-points").textContent = playerPoints;
    
    document.getElementById("deal-button").disabled = true;

});

 

document.getElementById("hit-button").addEventListener("click", function(){
            // Player Hand
            var newCard = document.createElement("img");
            newCard.className = "cards";
            var card = myDeck.draw();
            playerHand.addCard(card);
            newCard.setAttribute("src", card.cardImageUrl);
            var pHand = document.getElementById("player-hand");
            pHand.appendChild(newCard);
            var playerPoints = playerHand.getPoints();
            if (playerPoints > 21) {
                document.getElementById("hit-button").disabled = true;
                document.getElementById("player-points").textContent = playerPoints + "--You are busted!!!";
                document.getElementById("messages").textContent = "You lose!"
                setTimeout(function() {
                    window.location.reload(true);
                }, 5000); 
            }
            else {
                document.getElementById("player-points").textContent = playerPoints;
            }

});

 

document.getElementById("stand-button").addEventListener("click", function(){
    document.getElementById("hit-button").disabled = true;
    var playerPoints = playerHand.getPoints();
    var dealerPoints = dealerHand.getPoints();
    while (dealerPoints < 17) {
        var newCard = document.createElement("img");
        newCard.className = "cards";
        var card = myDeck.draw();
        dealerHand.addCard(card);
        newCard.setAttribute("src", card.cardImageUrl);
        var dHand = document.getElementById("dealer-hand");
        dHand.appendChild(newCard);
        var dealerPoints = dealerHand.getPoints();
        document.getElementById("dealer-points").textContent = dealerPoints;nd = document.getElementById("player-hand");
        dHand.appendChild(newCard);
    }
    
    if (dealerPoints > 21) {
        document.getElementById("messages").textContent = "Dealer busted - Player wins!!!";
        setTimeout(function() {
            window.location.reload(true);
        }, 5000)
    }
    else if (dealerPoints > playerPoints) {
        document.getElementById("messages").textContent = "Dealer wins!!!";
        setTimeout(function() {
            window.location.reload(true);
        }, 5000)

    }
    else if (dealerPoints < playerPoints) {
        document.getElementById("messages").textContent = "Player wins!!!";
        setTimeout(function() {
            window.location.reload(true);
        }, 5000)

    }
    else {
        document.getElementById("messages").textContent = "*** Tie Game ***";
        setTimeout(function() {
            window.location.reload(true);
        }, 5000) 
    }   
        
    
    

});
