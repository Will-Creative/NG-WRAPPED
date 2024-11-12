gsap.registerPlugin(ScrollTrigger);

// Select all containers with the 'text-container' class
const containers = document.querySelectorAll(".text-container");

containers.forEach(container => {
  // Select all h1 elements inside each container
  const headers = container.querySelectorAll("h1");

  headers.forEach(header => {
    // Function to animate the typewriter effect
    const typewriterEffect = () => {
      // Split the text content into individual letters and wrap them in spans
      const splitText = header.textContent.split("");
      header.textContent = ""; // Clear the original content

      splitText.forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = 0; // Start hidden
        header.appendChild(span);
      });

      // Animate each letter
      gsap.to(header.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05, // Time between each letter animation
      });
    };

    // Set up ScrollTrigger for each section and its header
    ScrollTrigger.create({
      trigger: container, // Trigger when the section comes into view
      start: "top 80%", // Start animation when the section reaches 80% from the top
      onEnter: () => typewriterEffect(), // Run the typewriter effect when entering
      onLeave: () => {
        // Clear the text when leaving the section to reset
        const spans = header.querySelectorAll("span");
        spans.forEach(span => {
          span.style.opacity = 0;
        });
      },
      onEnterBack: () => typewriterEffect(), // Re-run the animation when scrolling back up
      once: false // Allow repeated animations when scrolling in and out
    });
  });
});
