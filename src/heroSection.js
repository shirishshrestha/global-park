document.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    let headerDiv = document.querySelector(".headerDiv");
    if (window.scrollY > 100) {
      headerDiv.classList.add("shadow-md");
      // headerDiv.classList.add("bg-[#fff]");
    } else {
      headerDiv.classList.remove("shadow-md");
      // headerDiv.classList.remove("bg-[#fff]");
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial check on page load
  handleScroll();

  const headerAnimation = () => {
    const tl = gsap.timeline();
    tl.from(".header-figure", {
      y: -100,
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      ease: "power4.out",
    });
    tl.from(".header-menu a", {
      duration: 0.6,
      opacity: 0,
      ease: "sine.out",
      stagger: 0.2,
    });
    tl.from(".header-number", {
      delay: -0.5,
      duration: 0.6,
      opacity: 0,
      ease: "power4.out",
    });
    tl.from(".hero", {
      delay: -0.1,
      duration: 1,
      opacity: 0,
      ease: "sine.out",
    });
  };
  headerAnimation();
  const headings = document.querySelectorAll(".animated-heading");

  headings.forEach((heading) => {
    gsap.from(heading, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  });
});
