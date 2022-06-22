let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let player = {
    name: "Matt",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let num = Math.floor(Math.random()*13)+1

    if (num === 1){
        return 11
    }
    else if (num > 10) {
        return 10
    }
    else {
        return num
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: "
    //render cards
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    //render all cards
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Wanna draw  a new card? "
    }
    
    else if (sum === 21) {
        hasBlackJack = true
        message = "You got BlackJack! "
    }
    
    else {
        isAlive = false
        message = "You are out of the game! Try again!"
    }
    
    //Cash Out
    messageEl.textContent = message

}

function newCard() {
    
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)

    renderGame()

    }

}
