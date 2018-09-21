

window.addEventListener('load', function(){
    var deck = new Deck();
    deck.shuffle(deck.cards);
    var gameBoard = document.querySelector('.deck');
    gameBoard.innerHTML = '';
    for(var i = 0; i < deck.numCards; i++){
        deck.cards[i].flipped = false;
        deck.cards[i].matched = false;
        var card = document.createElement('li');
        card.classList.add('card');
        card.classList.add('flip');
        var icon = document.createElement('span');
        icon.classList.add('icon-' + deck.cards[i].icon);
        card.appendChild(icon);
        gameBoard.appendChild(card);
    }
});
