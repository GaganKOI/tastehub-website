console.log("TasteHub loaded");

document.addEventListener("DOMContentLoaded", function () {
  /* -----------------------------
     COMMUNITY TABS
  ----------------------------- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");

        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        button.classList.add("active");

        const targetElement = document.getElementById(target);
        if (targetElement) {
          targetElement.classList.add("active");
        }
      });
    });
  }

  /* -----------------------------
     MEDIA GALLERY
  ----------------------------- */
  const thumbCards = document.querySelectorAll(".thumb-card");
  const featuredImage = document.getElementById("featuredImage");
  const featuredTitle = document.getElementById("featuredTitle");
  const featuredDescription = document.getElementById("featuredDescription");

  if (thumbCards.length > 0 && featuredImage && featuredTitle && featuredDescription) {
    thumbCards.forEach((card) => {
      card.addEventListener("click", () => {
        const image = card.getAttribute("data-image");
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");

        featuredImage.src = image;
        featuredImage.alt = title;
        featuredTitle.textContent = title;
        featuredDescription.textContent = description;

        thumbCards.forEach((item) => item.classList.remove("active-thumb"));
        card.classList.add("active-thumb");
      });
    });
  }

  /* -----------------------------
     CONTACT FORM VALIDATION
  ----------------------------- */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const topic = document.getElementById("topic").value.trim();
      const message = document.getElementById("message").value.trim();

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const topicError = document.getElementById("topicError");
      const messageError = document.getElementById("messageError");
      const formMessage = document.getElementById("formMessage");

      let isValid = true;

      nameError.textContent = "";
      emailError.textContent = "";
      topicError.textContent = "";
      messageError.textContent = "";
      formMessage.textContent = "";
      formMessage.className = "form-message";

      if (name === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
      }

      if (email === "") {
        emailError.textContent = "Please enter your email address.";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      if (topic === "") {
        topicError.textContent = "Please select a topic.";
        isValid = false;
      }

      if (message === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
      } else if (message.length < 10) {
        messageError.textContent = "Your message should be at least 10 characters long.";
        isValid = false;
      }

      if (isValid) {
        formMessage.textContent = "Thank you. Your message has been sent successfully.";
        formMessage.classList.add("success");
        contactForm.reset();
      } else {
        formMessage.textContent = "Please fix the errors above and try again.";
        formMessage.classList.add("error");
      }
    });
  }

  /* -----------------------------
     ABOUT PAGE READ MORE
  ----------------------------- */
  const aboutToggleBtn = document.getElementById("aboutToggleBtn");
  const extraAboutText = document.getElementById("extra-about-text");

  if (aboutToggleBtn && extraAboutText) {
    aboutToggleBtn.addEventListener("click", () => {
      extraAboutText.classList.toggle("show-about-text");
      aboutToggleBtn.textContent = extraAboutText.classList.contains("show-about-text")
        ? "Read Less"
        : "Read More";
    });
  }

  /* -----------------------------
     ABOUT PAGE TABS
  ----------------------------- */
  const aboutTabBtns = document.querySelectorAll(".about-tab-btn");
  const aboutTabContents = document.querySelectorAll(".about-tab-content");

  if (aboutTabBtns.length > 0 && aboutTabContents.length > 0) {
    aboutTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-about-tab");

        aboutTabBtns.forEach((b) => b.classList.remove("active"));
        aboutTabContents.forEach((content) => content.classList.remove("active"));

        btn.classList.add("active");

        const targetElement = document.getElementById(target);
        if (targetElement) {
          targetElement.classList.add("active");
        }
      });
    });
  }

  /* -----------------------------
     HOME PAGE TABS
  ----------------------------- */
  const homeTabBtns = document.querySelectorAll(".home-tab-btn");
  const homeTabContents = document.querySelectorAll(".home-tab-content");

  if (homeTabBtns.length > 0 && homeTabContents.length > 0) {
    homeTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-home-tab");

        homeTabBtns.forEach((b) => b.classList.remove("active"));
        homeTabContents.forEach((content) => content.classList.remove("active"));

        btn.classList.add("active");

        const targetElement = document.getElementById(target);
        if (targetElement) {
          targetElement.classList.add("active");
        }
      });
    });
  }

  /* -----------------------------
     ACTIVE NAV LINK
  ----------------------------- */
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active-link");
    }
  });

  /* -----------------------------
     COUNTER ANIMATION
  ----------------------------- */
  const counters = document.querySelectorAll(".counter");

  if (counters.length > 0) {
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      let current = 0;
      const increment = Math.max(1, Math.ceil(target / 50));

      const updateCounter = () => {
        current += increment;

        if (current >= target) {
          counter.textContent = target + "+";
          return;
        }

        counter.textContent = current + "+";
        setTimeout(updateCounter, 30);
      };

      updateCounter();
    };

    counters.forEach((counter) => {
      animateCounter(counter);
    });
  }

  /* -----------------------------
     REVEAL ON SCROLL
  ----------------------------- */
  const revealSections = document.querySelectorAll(".reveal-section");

  if (revealSections.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.15 });

    revealSections.forEach((section) => revealObserver.observe(section));
  }
});