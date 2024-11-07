gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.section').forEach((section, index) => {
  gsap.fromTo(
    section.querySelector('.content'),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      duration: 1,
    }
  );
});
