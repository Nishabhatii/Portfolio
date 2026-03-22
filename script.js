document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOADER GREETING (ONLY ON FIRST PAGE LOAD PER SESSION) ================= */
  const greetings = [
    "Hello",
    "नमस्ते",
    "Bonjour",
    "Hola",
  ];

  const greetingEl = document.getElementById("greeting");
  const loader = document.getElementById("loader");
  let greetIndex = 0;

  function showGreetingOnce() {
    if (!greetingEl || !loader) return;

    // If greeting was already shown this session, skip animation
    if (sessionStorage.getItem("greetingShown")) {
      loader.style.display = "none";
      return;
    }

    function displayNextGreeting() {
      if (greetIndex >= greetings.length) {
        setTimeout(() => {
          loader.style.display = "none";
          sessionStorage.setItem("greetingShown", "true"); // mark as shown
        }, 600);
        return;
      }

      greetingEl.style.opacity = 0;

      setTimeout(() => {
        greetingEl.textContent = greetings[greetIndex];
        greetingEl.style.opacity = 1;
        greetIndex++;
        setTimeout(displayNextGreeting, 700);
      }, 200);
    }

    displayNextGreeting();
  }

  showGreetingOnce();


  /* ================= CONTACT FORM ================= */
  const form = document.getElementById("contactForm");
  const container = document.getElementById("formContainer");
  const thankYou = document.getElementById("thankYouMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      container.style.display = "none";
      thankYou.style.display = "block";
    });
  }


  /* ================= HAMBURGER MENU ================= */
  window.toggleMenu = function () {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");

    if (!menu || !hamburger) return;

    const isOpen = menu.style.display === "block";

    menu.style.display = isOpen ? "none" : "block";
    hamburger.style.display = isOpen ? "block" : "none";
  };


  /* ================= RESET NAV ON RESIZE ================= */
  function resetNav() {
    const menu = document.getElementById("menu");
    const hamburger = document.querySelector(".hamburger");

    if (!menu || !hamburger) return;

    if (window.innerWidth > 768) {
      menu.style.display = "flex";
      hamburger.style.display = "none";
    } else {
      menu.style.display = "none";
      hamburger.style.display = "block";
    }
  }

  resetNav();


  /* ================= EXTRA EVENTS ================= */
  const nav = document.querySelector(".nav");

  if (nav) {
    nav.addEventListener("mouseleave", () => {
      if (window.innerWidth <= 768) {
        const menu = document.getElementById("menu");
        if (menu && menu.style.display === "block") {
          toggleMenu();
        }
      }
    });
  }

  window.addEventListener("resize", resetNav);

});
