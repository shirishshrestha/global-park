document.addEventListener("DOMContentLoaded", function () {
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
      start: "top 60%",
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
