// // Dark Mode Toggle
// const themeToggle = document.getElementById("themeToggle");

// themeToggle.addEventListener("change", () => {
//   document.body.classList.toggle("dark-mode");
// });

// // FAQ Toggle
// function toggleFaq(element) {
//   const answer = element.querySelector(".faq-answer");
//   const arrow = element.querySelector(".arrow");

//   if (answer.style.display === "block") {
//     answer.style.display = "none";
//     arrow.textContent = "▼";
//   } else {
//     answer.style.display = "block";
//     arrow.textContent = "▲";
//   }
// }
// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ Toggle
function toggleFaq(element) {
  const answer = element.querySelector(".faq-answer");
  answer.classList.toggle("open");
  // Arrow rotate
  const arrow = element.querySelector(".arrow");
  arrow.classList.toggle("open");
}
