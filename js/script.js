/* =========================
   MENU HAMBÚRGUER
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

/* Fecha o menu ao clicar fora (mobile friendly) */
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  if (!menu || !hamburger) return;

  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.style.display = "none";
  }
});

/* =========================
   CARROSSEL DE FOTOS
========================= */
let slideIndex = 0;

function slide(direction) {
  const slides = document.querySelectorAll(".slide img");
  const captions = document.querySelectorAll(".slide span");

  if (slides.length === 0) return;

  slideIndex += direction;

  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;

  slides.forEach((img, index) => {
    img.style.display = index === slideIndex ? "block" : "none";
  });

  captions.forEach((cap, index) => {
    cap.style.display = index === slideIndex ? "block" : "none";
  });
}

/* Inicializa carrossel */
document.addEventListener("DOMContentLoaded", () => {
  slide(0);
});

/* =========================
   CONTROLE DE ÁUDIO
========================= */
let audioAtual = null;

function tocarAudio(src) {
  if (!src) return;

  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
  }

  audioAtual = new Audio(src);
  audioAtual.loop = true;
  audioAtual.volume = 0.5;

  /* Autoplay moderno exige interação prévia em alguns browsers */
  const playPromise = audioAtual.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.addEventListener(
        "click",
        () => {
          audioAtual.play();
        },
        { once: true }
      );
    });
  }
}

/* Pausa áudio ao sair da página */
window.addEventListener("beforeunload", () => {
  if (audioAtual) {
    audioAtual.pause();
    audioAtual.currentTime = 0;
  }
});
