//Defines what a card is in the game.
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
//Defines what a player is. They have a name, a hand of cards, and a score.
class Player {
    constructor(name, hand, score){
        this.name = name;
        this.hand = hand;
        this.score = score
    }
}

//Puts the cards into a deck with established suits, ranks, and values. Contains loop used to shuffle the deck.
class Deck {
    constructor() {
        this.deck = [];    
    }
    createDeck() {
        const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
        const value = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
       
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < value.length; j++) {
                let card = new Card(j + 1, value[j], suit[i]);
                this.deck.push(card);
            }
        }
    }
    shuffle(){
        const shuffledDeck = this.deck;

        function shuffleCards(){
            for (let i = shuffledDeck.length - 1; i> 0; i--){
                const k = Math.floor(Math.random() * (i + 1));
                const temp = shuffledDeck[i];
                shuffledDeck[i] = shuffledDeck[k];
                shuffledDeck[k] = temp;
            }
        } shuffleCards();
    }
}
 //The game being played   
class Game {
    constructor(){
}

playGame(){
    const deck = new Deck();
    deck.createDeck();
    deck.shuffle();

    const player1 = new Player('Goku', deck.deck.splice(0, 26), 0);
    const player2 = new Player('Vegeta', deck.deck,  0);
//checks if player1 has more points than player2. If he does, then the console will return him as the victor. If he has less points, the console will return player2 as the victor. If it is a tie, the console will display it as a tie
    for(let i = 0; i < player1.hand.length; i++){ 

    if(player1.hand[i].value > player2.hand[i].value){ 
        player1.score = player1.score + 1;
        console.log('Winner - Goku!');
        console.log('Goku score - ' + player1.score + ' : Vegeta score - ' + player2.score);
        console.log('');

    } else if(player2.hand[i].value > player1.hand[i].value){
        player2.score = player2.score + 1;
        console.log('Winner - Vegeta!');
        console.log('Goku score - ' + player1.score + ' : Vegeta score - ' + player2.score);
        console.log('');

    } else {
        console.log('Tie! Neither warrior earned points this game!');
        console.log('Goku score - ' + player1.score + ' : Vegeta score - ' + player2.score);
        console.log('')
            }
        }
        if (player1.score > player2.score){
    console.log('Goku wins the game!');
        }  else if (player2.score > player1.score){
    console.log('Vegeta wins the game!');
        } else {
    console.log('Neither warrior came out on top. Fight again?');
        }
    }
}

const game = new Game();
game.playGame();
const deck = new Deck();
deck.createDeck();
deck.shuffle();