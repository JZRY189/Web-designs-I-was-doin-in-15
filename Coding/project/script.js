document.addEventListener("DOMContentLoaded", function () {
    const classesToAnimate = [".afirst", ".asecond", "footer"]; // Add your class names here
    const elements = document.querySelectorAll(classesToAnimate.join(",")); // Select all matching elements
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stops observing after first appearance
          }
        });
      },
      { threshold: 0.3 }
    );
  
    elements.forEach((el) => observer.observe(el)); // Observes all selected elements
  });