//Bookmark Button toggle
const bookmarkButton = document.querySelector('[data-js="bookmark"]');

console.log(bookmarkButton);
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

//Show Answer Button
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerOutput = document.querySelector('[data-js="answer-output"]');

answerButton.addEventListener("click", () => {
  answerOutput.classList.toggle("card__answer--active");

  if (answerOutput.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});

//add Card
