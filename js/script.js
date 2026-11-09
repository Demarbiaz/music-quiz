
const questions = document.querySelectorAll(".question-block");
const showResults = document.getElementById("show-results");
const resultContainer = document.getElementById("result-container");

questions.forEach((question) => {
    const buttons = question.querySelectorAll(".answer-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });
});

function displayResult() {
    let scores = [0, 0, 0, 0];

    questions.forEach((question) => {
        const selected = question.querySelector(".selected");

        if (selected) {
            const score = Number(selected.dataset.score);
            scores[score - 1]++;
        }
    });

    const answered = document.querySelectorAll(".selected").length;

    if (answered !== questions.length) {
        resultContainer.textContent = "Please answer all questions first!";
        return;
    }

    const genres = ["Rap", "R&B", "Pop", "Hip-Hop"];
    const descriptions = [
        "You are confident and love music with strong energy!",
        "You are relaxed and enjoy music with meaning and emotion!",
        "You are outgoing and love music that brings people together!",
        "You are creative and enjoy discovering different sounds!"
    ];

    let highestScore = Math.max(...scores);
    let winner = scores.indexOf(highestScore);

    resultContainer.innerHTML = `
        <h2>Your Genre Is ${genres[winner]}!</h2>
        <p>${descriptions[winner]}</p>
    `;
}

showResults.addEventListener("click", displayResult);
