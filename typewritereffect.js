<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script>
  gsap.registerPlugin(ScrollTrigger);

  // Select all containers with the 'text-container' class
  const containers = document.querySelectorAll(".text-container");

  containers.forEach(container => {
    // Select all h1 elements inside each container
    const headers = container.querySelectorAll("h1");

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

      // Animate each letter
      gsap.to(header.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05, // Time between each letter animation
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // Adjust as needed
          toggleActions: "play reset play reset", // Repeats on re-entry
          once: false // Allows repeated animations
        }
      });
    });
  });
</script>
