const ratingWrapper = document.querySelector(".rating-wrapper");
let selectedRatingText = "";
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const choosedRating = document.querySelector(".choosed-rating");

ratingWrapper.addEventListener("click", (event) => {
  const selectedRating = event.target;

  if (selectedRating.classList.contains("rating")) {
    const ratings = ratingWrapper.querySelectorAll(".rating");
    for (let rating of ratings) {
      rating.classList.remove("selected");
    }

    selectedRating.classList.add("selected");
    selectedRatingText = selectedRating.textContent;

    console.log(selectedRatingText);
  }
});

submitBtn.addEventListener("click", () => {
  const cardWrapper1 = container.children[0];
  const cardWrapper2 = container.children[1];

  cardWrapper1.classList.add("display-none");
  cardWrapper2.classList.remove("display-none");
  choosedRating.textContent = selectedRatingText;
});
