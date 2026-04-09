const STORAGE_KEY = 'reviews-counter';

let reviewCount = localStorage.getItem(STORAGE_KEY);

if (!reviewCount) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount);
}

reviewCount++;

localStorage.setItem(STORAGE_KEY, reviewCount);

const reviews = document.querySelector("#reviews");
if (reviews) {
    reviews.textContent = reviewCount;
}