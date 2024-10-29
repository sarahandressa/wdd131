document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Set the current year
    currentYearSpan.textContent = new Date().getFullYear();

    // Set the last modified date
    lastModifiedSpan.textContent = document.lastModified;

    // Populate the product dropdown
    populateProductDropdown();

    // Increment review count if on review.html
    incrementReviewCount();
});

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

function populateProductDropdown() {
    const selectProduct = document.getElementById("selectProduct");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (Rating: ${product.averagerating})`;
        selectProduct.appendChild(option);
    });
}

// Form validation
const form = document.querySelector(".reviewForm");

form.addEventListener("submit", (event) => {
    const selectProduct = document.getElementById("selectProduct");
    const ratingChecked = document.querySelector('input[name="stars"]:checked');

    if (!selectProduct.value) {
        alert("Please select a product.");
        event.preventDefault();
    }
    if (!ratingChecked) {
        alert("Please select a rating.");
        event.preventDefault();
    }
});

 // Display the total number of reviews
 displayReviewCount();


function displayReviewCount() {
    // Retrieve the review count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // Initialize count if it's not present
    if (!reviewCount) {
        reviewCount = 0;
        localStorage.setItem("reviewCount", reviewCount);
    } else {
        reviewCount = parseInt(reviewCount);
    }

    // Display the count in the "counter" span
    const counterSpan = document.getElementById("counter");
    counterSpan.textContent = reviewCount;
}