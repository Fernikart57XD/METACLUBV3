let counter = 0;
let firstSelection = "";
let secondSelection = "";

let pointsCard = document.getElementById('points');
let value = 0;

correctCards.addEventListener("checked", () => {value++;pointsCard.textContent = value});

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
card.addEventListener("click", () => {
card.classList.add("clicked");

    if (counter === 0) {
    firstSelection = card.getAttribute("fruit");
    counter++;
    } else {
        secondSelection = card.getAttribute("fruit");
        counter = 0;

    if (firstSelection === secondSelection) {
      const correctCards = document.querySelectorAll(
          ".card[fruit='" + firstSelection + "']"
      );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
      }
    }
  });
  resetCheckedCards(); {

    firstSelection.classList.remove("checked");
    secondSelection.classList.remove("checked");
}

checkIfWon(); {

    this.correctCards++;

    if (this.maxcorrectCards == this.foundcorrectCards) {

        alert("¡Ganaste!");
        this.setNewGame();            
    }
}

setNewGame(); {
    this.removeClickEvents();
    this.cards.forEach(card => card.classList.remove("checked"));
}

});

