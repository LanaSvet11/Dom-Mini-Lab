// Select the <h1> element using its ID
const h1Element = document.querySelector(".firstHeading");

// Set the text content of the <h1> element
h1Element.textContent = "You can do it!";

// Select the "Hide" button using its ID
const hideButton = document.querySelector(".hideButton");

// Add click event listener to the "Hide" button
hideButton.addEventListener("click", function () {
  h1Element.style.display = "none";
});

// Select the "Unhide" button using its ID
const unhideButton = document.querySelector(".unhideButton");

// Add click event listener to the "Unhide" button
unhideButton.addEventListener("click", function () {
  h1Element.style.display = "block";
});
