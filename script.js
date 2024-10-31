let bet = true;
let hit = false;
let totalValue = 0;
let totalValue2 = 0;
let totalReValue = 0;
let totalReValue2 = 0;
let money = 1000; 

// let cardImage = new Image();
// cardImage.src = "images/Svg-cards-2.0.svg.png";

document.addEventListener("DOMContentLoaded", () => {
    const cardWidth = 197;
    const cardHeight = 287;
    const img = new Image();
    img.src = 'images/Svg-cards-2.0.svg.png';

    img.onload = (cardRow, cardCol) => {
        const canvas = document.getElementById('cardCanvas');
        const ctx = canvas.getContext('2d');

        // const sourceX = 0;
        // const sourceY = 0;

        const sourceX = cardCol * cardWidth;
        const sourceY = cardRow * cardHeight;
        ctx.drawImage(img, sourceX, sourceY, cardWidth, cardHeight, 0, 0, cardWidth, cardHeight);
    };

    img.onload()
})

const cards = [
    {
        value: 2,
        amount: 4,
        houseNumber: {
            Spades: {
                number: 1,
                // size: img.onload(4, 1),
                size : {
                    row: 4,
                    collum: 2,
                }
            },
            Clover: {
                number: 1,
                size : {
                    row: 1,
                    collum: 2,
                }
            },
            Diamonds: {
                number: 1,
                size : {
                    row: 2,
                    collum: 2,
                }
            }, 
            Hearts: {
                number: 1,
                size : {
                    row: 3,
                    collum: 2,
                }
            },
        }
    },
    {
        value: 3,
        amount: 4,
        houseNumber: {
            Spades: {
                number: 1,
                // size: img.onload(4, 1),
                size : {
                    row: 4,
                    collum: 3,
                }
            },
            Clover: {
                number: 1,
                size : {
                    row: 1,
                    collum: 3,
                }
            },
            Diamonds: {
                number: 1,
                size : {
                    row: 2,
                    collum: 3,
                }
            }, 
            Hearts: {
                number: 1,
                size : {
                    row: 3,
                    collum: 3,
                }
            },
        }
    },
    {
        value: 4,
        amount: 4,
        houseNumber: {
            Spades: {
                number: 1,
                // size: img.onload(4, 1),
                size : {
                    row: 4,
                    collum: 4,
                }
            },
            Clover: {
                number: 1,
                size : {
                    row: 1,
                    collum: 4,
                }
            },
            Diamonds: {
                number: 1,
                size : {
                    row: 2,
                    collum: 4,
                }
            }, 
            Hearts: {
                number: 1,
                size : {
                    row: 3,
                    collum: 4,
                }
            },
        }
    },
    {
        value: 5,
        amount: 4,
        houseNumber: {
            Spades: {
                number: 1,
                // size: img.onload(4, 1),
                size : {
                    row: 4,
                    collum: 5,
                }
            },
            Clover: {
                number: 1,
                size : {
                    row: 1,
                    collum: 5,
                }
            },
            Diamonds: {
                number: 1,
                size : {
                    row: 2,
                    collum: 5,
                }
            }, 
            Hearts: {
                number: 1,
                size : {
                    row: 3,
                    collum: 5,
                }
            },
        }
    },
    {
        value: 6,
        amount: 4,
        houseNumber: {
            Spades: {
                number: 1,
                // size: img.onload(4, 1),
                size : {
                    row: 4,
                    collum: 4,
                }
            },
            Clover: {
                number: 1,
                size : {
                    row: 1,
                    collum: 4,
                }
            },
            Diamonds: {
                number: 1,
                size : {
                    row: 2,
                    collum: 4,
                }
            }, 
            Hearts: {
                number: 1,
                size : {
                    row: 3,
                    collum: 4,
                }
            },
        }
    },
    {
        value: 7,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 8,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 9,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 10,
        amount: 4,
        name: "Standard",
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 10,
        amount: 4,
        name: "Jack",
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 10,
        amount: 4,
        name: "Queen",
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }

// this list makes me want to fucking kill myself; why the fuck did I think objects within objects within objects within objects was a good fucking idea?

    },
    {
        value: 10,
        amount: 4,
        name: "King",
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        amount: 4,
        name: "Ace",
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        type: "flipped",
    },
    {
        name: "Joker",
        present: false,
    }
];

img.onload = () => {
    // Set the size property after the image loads
    cardObject.houseNumber.Spades.size = {
        width: img.width,   // Use the actual image width
        height: img.height   // Use the actual image height
    };

    console.log("Card object after image load:", cardObject);
};

const win = (bet) => {
    const wonBet = bet * 2;
    money += wonBet;
    console.log("you won")
    return;
};

const defeat = (bet) => {
    money -= bet;
    console.log("you lost");
    return;
}

// function hit() {

// } 

// class thereafter {

// };

const playOpponent = (value, bet) => {
    totalValue2 = 0;
    let ReEd = false;
    let card1 = cards[Math.floor(Math.random()*cards.length)];
    const cardValue1 = card1.value;
    let cardReplace = cards[Math.floor(Math.random()*cards.length)];
    const cardReValue = cardReplace.value;
    if (card1.amount > 0) {
        card1.amount -= 1; 
    } else {
        cards.splice(cards.indexOf(card1), 1);
        ReEd = true;
    } 
    const suits1 = Object.keys(card1.houseNumber);
    const randomSuit1 = suits1[Math.floor(Math.random() * suits1.length)];
    if (card1.houseNumber[randomSuit1] > 0) {
        card1.houseNumber[randomSuit1] -= 1;
    }
    if (card1.houseNumber[randomSuit1] == 0) {
        delete card1.houseNumber[randomSuit1];
    };
    let card2 = cards[Math.floor(Math.random()*cards.length)];
    let ReEd2 = false;
    let cardReplace2 = cards[Math.floor(Math.random()*cards.length)];
    const cardReValue2 = cardReplace2.value;
    const cardValue2 = card2.value;
    if (card2.amount > 0) {
        card2.amount -= 1; 
    } else {
        cards.splice(cards.indexOf(card2), 1);
        ReEd2 = true;
    }
    const suits2 = Object.keys(card2.houseNumber);
    const randomSuit2 = suits2[Math.floor(Math.random() * suits2.length)];
    if (card2.houseNumber[randomSuit2] > 0) {
        card2.houseNumber[randomSuit2] -= 1;
    }
    if (card2.houseNumber[randomSuit2] == 0) {
        delete card2.houseNumber[randomSuit2];
    };
    totalValue2 = cardValue1 + cardValue2;
    if (ReEd2 == true && ReEd == true) {
        totalReValue2 = cardReValue + cardReValue2;
    } else if (ReEd2 == true) {
        totalReValue2 = cardValue1 + cardReValue2;
    } else if (ReEd == true) {
        totalReValue2 = cardReValue + cardValue2;
    }
    if (card1.name == "Ace") {
        card1.value = totalValue2 >= 21 ? 1 : 11;
    };
    if (ReEd == true) {
        if (cardReValue2.name == "Ace") {
            cardReValue2.value = totalReValue
        }
    } else if (ReEd2 == true) {
        if (cardReValue2.name == "Ace") {
            cardReValue2.value = totalReValue2
        }
    };
    if (card2.name == "Ace") {
        card2.value = totalValue2 >= 21 ? 1 : 11;
    };
    if (totalValue2 < 16) {
        let card3 = cards[Math.floor(Math.random()*cards.length)];
        const cardValue3 = card3.value;
        if (card3.amount > 0) {
            card3.amount -= 1; 
        } else {
            cards.splice(cards.indexOf(card3), 1);
        }
        const suits3 = Object.keys(card3.houseNumber);
        const randomSuit3 = suits3[Math.floor(Math.random() * suits3.length)];
        if (card3.houseNumber[randomSuit3] > 0) {
            card3.houseNumber[randomSuit3] -= 1;
        }
        if (card3.houseNumber[randomSuit3] == 0) {
            delete card3.houseNumber[randomSuit3];
        };
        totalValue2 = cardValue1 + cardValue2 + cardValue3;
    }
    console.log(suits2);
    console.log(randomSuit2)
    console.log(card2);
    console.log(totalValue2);
    if (ReEd2 != true && ReEd != true) {
        if (value > totalValue2) {
            win(bet);
        } else if (totalValue2 > value) {
            defeat(bet);
        } else if (totalValue2 > 21 && value > 21) {
            tie(bet);
        } else if (totalValue2 > 21) {
            win(bet);
        };
    }
}

const play = (bet) => {
    if (bet === false) {
        console.error('please bet to enter');
        return;
    };
    let card1 = cards[Math.floor(Math.random()*cards.length)];
    const cardValue1 = card1.value;
    if (card1.amount > 0) {
        card1.amount -= 1; 
    } else {
        cards.splice(cards.indexOf(card1), 1);
    }
    const suits1 = Object.keys(card1.houseNumber);
    const randomSuit1 = suits1[Math.floor(Math.random() * suits1.length)];
    if (card1.houseNumber[randomSuit1] > 0) {
        card1.houseNumber[randomSuit1] -= 1;
    }
    if (card1.houseNumber[randomSuit1] == 0) {
        delete card1.houseNumber[randomSuit1];
    };
    console.log(suits1);
    console.log(randomSuit1)
    console.log(card1);
    let card2 = cards[Math.floor(Math.random()*cards.length)];
    const cardValue2 = card2.value;
    if (card2.amount > 0) {
        card2.amount -= 1; 
    } else {
        cards.splice(cards.indexOf(card2), 1);
    }
    const suits2 = Object.keys(card2.houseNumber);
    const randomSuit2 = suits2[Math.floor(Math.random() * suits2.length)];
    if (card2.houseNumber[randomSuit2] > 0) {
        card2.houseNumber[randomSuit2] -= 1;
    }
    if (card2.houseNumber[randomSuit2] == 0) {
        delete card2.houseNumber[randomSuit2];
    };
    totalValue = cardValue1 + cardValue2;
    if (card1.name == "Ace") {
        card1.value = totalValue >= 21 ? 1 : 11;
    };
    if (card2.name == "Ace") {
        card2.value = totalValue >= 21 ? 1 : 11;
    };
    console.log(suits2);
    console.log(randomSuit2)
    console.log(card2);
    console.log(totalValue);
    playOpponent(totalValue, win);
}
play();

// let { size } = cards;
//     img.onload(size);

