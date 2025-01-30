// Function to update the UTC time
function updateUTCTime() {
  const utcElement = document.querySelector("[data-testid='currentTimeUTC']");
  const now = new Date();
  utcElement.textContent = `${
    now.toISOString().split("T")[1].split(".")[0]
  } UTC`;
}

// Update UTC time when the page loads
setInterval(() => {
  updateUTCTime();
}, 1000);

// function updateSpacerHeight() {
//   const absoluteElement = document.querySelector(".profile-description");
//   const spacer = document.querySelector(".spacer");

//   if (absoluteElement && spacer) {
//     spacer.style.height = `${absoluteElement.offsetHeight}px`;
//   }
// }

// // Observe changes in the absolute element's size
// const observer = new ResizeObserver(updateSpacerHeight);
// const absoluteElement = document.querySelector(".absolute-box");

// if (absoluteElement) {
//   observer.observe(absoluteElement);
// }

// // Initial update in case the element is already rendered
// updateSpacerHeight();
