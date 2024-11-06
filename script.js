AOS.init();


window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY; // Get the vertical scroll position
  const windowHeight = window.innerHeight;

 
  if (scrollPosition < windowHeight) {
    // If we are in the first screen area, make the background blue
    document.body.style.backgroundColor = "#007BFF";
  } else if (scrollPosition < 2 * windowHeight) {
    // In the second area, change to a different color, like green
    document.body.style.backgroundColor = "#28a745";
  } else if (scrollPosition < 3 * windowHeight) {
    // In the third area, change to another color, like orange
    document.body.style.backgroundColor = "#fd7e14";
  } else {
    // Any further scrolling can transition to another color, like purple
    document.body.style.backgroundColor = "#6f42c1";
  }
});
