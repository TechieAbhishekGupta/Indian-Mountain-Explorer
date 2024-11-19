//====================== Loader Starts ====================================
// // Checking if the current page is the landing page
// if (
//   window.location.pathname.endsWith("pages/index.html") ||
//   window.location.pathname.endsWith("pages/")
// ) {
//   // Showing the loader when the page is loading
//   window.onload = function () {
//     document.getElementById("loader").style.display = "flex";
//   };

//   // Hiding the loader after a delay to simulate loading time
//   setTimeout(function () {
//     document.getElementById("loader").style.display = "none";
//   }, 1000); // 1000ms = 1 seconds
// }
// Function to show the loader
function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

// Function to hide the loader
function hideLoader() {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 500); // Delay of 1000ms = 1 second
}

// Showing the loader when the page starts loading
showLoader();

// Hiding the loader when all content is fully loaded
window.onload = function () {
  hideLoader();
};
//====================== Loader Ends ====================================
