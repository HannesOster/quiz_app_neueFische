//Add Card process

const form = document.querySelector('[data-js="add-card"]');
const main = document.querySelector('[data-js="main"]');
console.log("connected");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    question: event.target.elements.question.value,
    answer: event.target.elements.answer.value,
    category: event.target.elements.category.value,
  };
  console.log(data);
  const newCard = document.createElement("li");
  const newArticle = document.createElement("article");
  const newCardQuestion = document.createElement("h2");
  const newCardAnswer = document.createElement("p");
  const newCardButton = document.createElement("button");
  const newCardCategory = document.createElement("p");
  const newCardBookmark = document.createElement("div");

  newCardQuestion.textContent = data.question;
  newCardAnswer.textContent = data.answer;
  newCardCategory.textContent = "#" + data.category;
  newCardButton.textContent = "Show Answer";
  newCardBookmark.innerHTML = `<button
  data-js="bookmark"
  class="bookmark"
  aria-label="bookmark"
  type="button"
  name="button"
>
  <svg
    class="bookmark__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 24 24"
  >
    <path
      d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
    />
  </svg>
`;
  newArticle.classList.add("card");
  newCardAnswer.classList.add("card__answer");
  newCard.classList.add("card-list__item");
  newCardButton.classList.add("card__button-answer");
  newCardAnswer.setAttribute("hidden", "");
  newCardCategory.classList.add("card__tag-list-item");
  newCardBookmark.classList.add("card__button-bookmark");

  newCardButton.addEventListener("click", () => {
    newCardAnswer.classList.toggle("card__answer--active");
    if (newCardAnswer.classList.contains("card__answer--active")) {
      newCardButton.textContent = "Hide answer";
    } else {
      newCardButton.textContent = "Show answer";
    }
  });

  main.append(newCard);
  newCard.append(newArticle);
  newArticle.append(
    newCardBookmark,
    newCardQuestion,
    newCardButton,
    newCardAnswer,
    newCardCategory
  );

  //add Bookmark Button toggle
  const bookmarkButton = document.querySelector('[data-js="bookmark"]');

  console.log(bookmarkButton);
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
  });
  form.reset();
  event.target.question.focus();
});

//maxLength advise
const amountLeft = document.querySelector('[data-js="question-advise"]');
const amountLeft2 = document.querySelector('[data-js="answer-advise"]');
const answerElement = document.querySelector('[data-js="answer-input"]');
const questionElement = document.querySelector('[data-js="question-input"]');

const maxLength = questionElement.getAttribute("maxlength");
//question
const updateAmountLeft = (value) => {
  amountLeft.innerText = "(" + value + " characters left)";
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
  if (questionElement.value.length == maxLength) {
    amountLeft.classList.add("character-advise--red");
  } else {
    amountLeft.classList.remove("character-advise--red");
  }
});
//answer
const maxLength2 = answerElement.getAttribute("maxlength");

const updateAmountLeft2 = (value) => {
  amountLeft2.innerText = "(" + value + " characters left)";
};

updateAmountLeft2(maxLength2);

answerElement.addEventListener("input", () => {
  updateAmountLeft2(maxLength2 - answerElement.value.length);
  if (answerElement.value.length == maxLength2) {
    amountLeft2.classList.add("character-advise--red");
  } else {
    amountLeft2.classList.remove("character-advise--red");
  }
});

//Bookmark Button toggle
const bookmarkButton = document.querySelector('[data-js="bookmark"]');

console.log(bookmarkButton);
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
