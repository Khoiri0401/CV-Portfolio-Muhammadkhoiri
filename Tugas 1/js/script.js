document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const themeToggle = document.getElementById("themeToggle");
  const printCv = document.getElementById("printCv");
  const skillTags = document.querySelectorAll(".skill-tag");
  const skillStatus = document.getElementById("skillStatus");
  const contactForm = document.querySelector(".contact-form");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const savedTheme = localStorage.getItem("cv-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("cv-theme", isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
  }

  if (printCv) {
    printCv.addEventListener("click", () => {
      window.print();
    });
  }

  skillTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      skillTags.forEach((item) => item.classList.remove("active"));
      tag.classList.add("active");
      if (skillStatus) {
        skillStatus.textContent = `Keahlian aktif: ${tag.dataset.skill}`;
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Pesan berhasil dikirim. Terima kasih!");
      contactForm.reset();
    });
  }
});

const skills = {
  HTML5: 90,
  CSS3: 85,
  JavaScript: 75,
  "UI/UX": 80,
  Figma: 85
};

const skillButtons = document.querySelectorAll(".skill-tag");
const skillStatus = document.getElementById("skillStatus");
const skillProgress = document.getElementById("skillProgress");

skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const skill = button.dataset.skill;
    const percentage = skills[skill];

    skillStatus.textContent = `${skill}: ${percentage}%`;
    skillProgress.style.width = `${percentage}%`;
  });
});