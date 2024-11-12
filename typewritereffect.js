  gsap.registerPlugin(ScrollTrigger);

  // Select all containers with the 'text-container' class
  const containers = document.querySelectorAll(".text-container");

  containers.forEach(container => {
    // Select all h1 elements inside each container
    const headers = container.querySelectorAll("h1");

    headers.forEach(header => {
      // Split the text content into individual letters and wrap them in spans
      const splitText = header.textContent.split("").filter(char => char.trim() !== ""); // Filter out any empty strings (like spaces)
      header.textContent = ""; // Clear the original content

      splitText.forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = 0; // Start hidden
        header.appendChild(span);
      });

      // Animate each letter using GSAP
      gsap.to(header.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05, // Time between each letter animation
        scrollTrigger: {
          trigger: container,
          start: "top 80%", // Adjust trigger point
          toggleActions: "play none none none", // Prevent reset on leaving
          once: true // Animation runs only once
        }
      });
    });
  });
