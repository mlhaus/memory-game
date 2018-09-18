'use strict';

var Card = function(icon) {
    this.icon = icon;
    this.flipped = false;
    this.matched = false;
};

var Deck = function() {
    var icons = ['binoculars', 'power', 'headphones', 'fire', 'lifebuoy', 'mug', 'camera', 'bug'];
    this.card1 = new Card(icons[0]);
    this.card2 = new Card(icons[1]);
    this.card3 = new Card(icons[2]);
    this.card4 = new Card(icons[3]);
    this.card5 = new Card(icons[4]);
    this.card6 = new Card(icons[5]);
    this.card7 = new Card(icons[6]);
    this.card8 = new Card(icons[7]);
    this.card9 = new Card(icons[0]);
    this.card10 = new Card(icons[1]);
    this.card11 = new Card(icons[2]);
    this.card12 = new Card(icons[3]);
    this.card13 = new Card(icons[4]);
    this.card14 = new Card(icons[5]);
    this.card15 = new Card(icons[6]);
    this.card16 = new Card(icons[7]);
};