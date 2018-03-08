// Card Object
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

var myCard = new Card('5', 'D')

Card.prototype.getImageUrl = function() {
    var imageUrl = 'Images/' + this.rank + this.suit + '.jpg';
    return imageUrl;
}

console.log(myCard.getImageUrl());

class Hand {
    constructor() {

    } 
}

Hand.prototype.addCard = function() {
    
}

> var myHand = new Hand()
> myHand.addCard(new Card(5, 'diamonds'))
> myHand.addCard(new Card(13, 'spades'))
> myHand.getPoints()
15

