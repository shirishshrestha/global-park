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
  gsap.from(".hero-circle", {
    duration: 2,
    y: 10,
    opacity: 0.6,
    yoyo: true,
    ease: "power1.inOut",
    repeat: -1,
  });

  gsap.from(".why-image", {
    duration: 2,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".why-image",
      start: "top 50%",
      end: "bottom bottom",
    },
  });

  gsap.from(".scrubRightEffect div, .why-heading", {
    x: 500,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".scrubRightEffect",
      start: "top 50%",
      end: "bottom bottom",
    },
  });

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
  gsap.fromTo(
    ".goal-years",
    {
      innerHTML: 1,
    },
    {
      innerHTML: 20,
      duration: 3,
      scrollTrigger: {
        trigger: ".goal-years",
        start: "top 55%",
        end: "bottom 20%",
      },
      snap: {
        innerHTML: 1,
      },
      onUpdate: function () {
        this.targets()[0].innerHTML = Math.ceil(this.targets()[0].innerHTML);
      },
    }
  );

  // gsap.from(".goal-description, .goal-image", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1,
  //   stagger: 0.5,
  //   scrollTrigger: {
  //     trigger: ".goal-years",
  //     start: "top 70%",
  //     end: "bottom 20%",
  //   },
  // });

  gsap.from(".p-services", {
    opacity: 0,
    duration: 1.2,
    ease: "ease.in",
    scrollTrigger: {
      trigger: ".p-services",
      start: "top 60%",
    
    },
  });
  gsap.from(".student-feedback", {
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".student-feedback",
      start: "top 60%",
    },
  });
  gsap.from(".mySwiper", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".mySwiper",
      start: "top 60%",
    },
  });

  gsap.from(".mentor-cards", {
    duration: 1,
    y: 100,
    stagger: 0.2,
    opacity: 0,
    ease: "sine.out",
    scrollTrigger: {
      trigger: ".mentor-cards",
      start: "top 80%",
    },
  });
});
