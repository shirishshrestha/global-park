document.addEventListener("DOMContentLoaded", function () {
  const aboutContent = document.querySelectorAll(".about-content");
  aboutContent.forEach((content) => {
    gsap.from(content, {
      opacity: 0,
      duration: 1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: content,
        start: "top 60%",
        end: "bottom 20%",
      },
    });
  });
});
