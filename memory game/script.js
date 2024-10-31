
const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard =false;
let lockBoard = false;
let firstCard, secondCard

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}


function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;
    isMatch ? disableCard() : unflipCard();
}


function disableCard() {

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}


function unflipCard() {
lockBoard = true;
setTimeout(() => {
firstCard.classList.remove("flip");
secondCard.classList.remove("flip");
resetBoard();
}, 500);
}


function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


(
    function() {
        cards.forEach((card) => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    }
)();



cards.forEach((card) => card.addEventListener("click", flipCard));


function chooseHarryPotter() {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
       .then(data => {
         createItems(data, 'https://hp-api.onrender.com/images/'); // הוספת בסיס כתובת לתמונות הארי פוטר
       });
   }


//const div = document.createElement("div");
//div.innerHTML = `
 // <h3>${item.name}</h3>
 // <img src="${item.image}" alt="${item.name}">
//`;