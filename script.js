let playerPoints = 0;
let computerPoints = 0;

const options = ["камень", "ножницы", "бумага"];

function computerMove() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerChoice) {

    const comp = computerMove();

    document.getElementById("player").innerHTML =
        `Ваш выбор: <span class="highlight">${playerChoice}</span>`;
    document.getElementById("computer").innerHTML =
        `Компьютер: <span class="highlight">${comp}</span>`;

    let result = "";

    if (playerChoice === comp) {
        result = "Ничья";
    } else if (
        (playerChoice === "камень" && comp === "ножницы") ||
        (playerChoice === "ножницы" && comp === "бумага") ||
        (playerChoice === "бумага" && comp === "камень")
    ) {
        result = "Вы победили!";
        playerPoints++;
    } else {
        result = "Компьютер выиграл";
        computerPoints++;
    }

    document.getElementById("message").textContent = result;

    document.getElementById("score").textContent =
        `${playerPoints} : ${computerPoints}`;
}

document.querySelectorAll("[data-choice]").forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.dataset.choice);
    });
});
