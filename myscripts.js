// === Side Nav Controls ===
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// === Glo Chatbot UI ===
const gloToggle = document.getElementById("gloToggle");
const gloChatbot = document.getElementById("gloChatbot");
const gloClose = document.getElementById("gloClose");

if (gloToggle && gloChatbot && gloClose) {
  gloToggle.addEventListener("click", () => {
    gloChatbot.style.display = "flex";
  });

  gloClose.addEventListener("click", () => {
    gloChatbot.style.display = "none";
  });
}

// === Typewriter Effect ===
const phrases = [
  "Software Engineer.",
  "Creative Technologist.",
  "Code & Curiosity.",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function typeLoop() {
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) return;

  typewriter.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeLoop, speed);
}

typeLoop();

// === Scroll Fade-In === Not enough content for now
const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

faders.forEach((el) => observer.observe(el));
