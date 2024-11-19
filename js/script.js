/**
 * Student Information
 * Name: Abhishek Gupta
 * Student ID: 21810094
 */


// ===================== Go To Top Btn Starts =================================
// Getting the button element
// var goToTopBtn = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, showing the button
// window.onscroll = function () {
//   if (document.body.scrollTop > 20) {
//     goToTopBtn.style.display = "block";
//   } else {
//     goToTopBtn.style.display = "none";
//   }
// };

// When the user clicks on the button, scrolling to the top of the document
// goToTopBtn.addEventListener("click", function () {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// });
// ===================== Go To Top Btn Ends =================================

// Getting the button element
var goToTopBtn = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, showing the button
window.onscroll = function () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    goToTopBtn.style.visibility = "visible"; // Make button visible
  } else {
    goToTopBtn.style.visibility = "hidden"; // Hide button without removing space
  }
};

// When the user clicks on the button, scrolling to the top of the document
goToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
