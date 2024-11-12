gsap.registerPlugin(ScrollTrigger);

// Select all sections that contain the `h1` elements
const sections = document.querySelectorAll(".section");

sections.forEach(section => {
  // Select all `h1` elements within each section
  const headers = section.querySelectorAll("h1");

  headers.forEach(header => {
    // Split the text content into individual letters and wrap them in spans
    const splitText = header.textContent.split("");
    header.textContent = ""; // Clear the original content

    splitText.forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0; // Start hidden
      header.appendChild(span);
    });

    // Animate each letter when the section comes into view
    gsap.to(header.querySelectorAll("span"), {
      opacity: 1,
      duration: 0.05,
      stagger: 0.1, // Time between each letter animation
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Adjust as needed for when you want the animation to start
        toggleActions: "play reset play reset", // Repeats when re-entered
        once: false // Ensures it repeats when scrolling back
      }
    });
  });
});
