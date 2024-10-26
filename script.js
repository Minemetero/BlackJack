const cards = [
    {
        value: 2,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 3,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 4,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 5,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
        }
    },
    {
        value: 6,
        amount: 4,
        houseNumber: {
            Spades: 1,
            Clover: 1,
            Diamonds: 1, 
            Hearts: 1
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
];

const play = () => {
    let card1 = cards[Math.floor(Math.random()*cards.length)];
    const cardValue1 = card1.value;
    if (card1.amount > 0) {
        card1.amount -= 1; 
    } else {
        cards.splice(cards.indexOf(card1), 1);
    }
    const suits1 = Object.keys(card1.houseNumber);
    const randomSuit1 = suits1[Math.floor(Math.random() * suits1.length)];
    const cardAmount1 = card1.houseNumber[randomSuit1];
    if (card1.houseNumber[randomSuit1] > 0) {
        card1.houseNumber[randomSuit1] -= 1;
    }
    if (card1.houseNumber[randomSuit1] == 0) {
        // card1.houseNumber[randomSuit1] -= 1;
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
    const cardAmount2 = card2.houseNumber[randomSuit2];
    if (card2.houseNumber[randomSuit2] > 0) {
        card2.houseNumber[randomSuit2] -= 1;
    }
    if (card2.houseNumber[randomSuit2] == 0) {
        // card2.houseNumber[randomSuit2] -= 1;
        delete card2.houseNumber[randomSuit2];
    };
    let totalValue = cardValue1 + cardValue2;
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
    if (totalValue > 21) {
        console.log("you lost, busted")
    }
}
play()

