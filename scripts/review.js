const reviewsDisplay = document.querySelector("#total_review");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews == 0) {
	reviewsDisplay.textContent = `Thanks for your first review!`;
    numReviews = 1;
} else {
  reviewsDisplay.innerHTML = numReviews;
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);