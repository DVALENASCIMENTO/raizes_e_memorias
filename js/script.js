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

let lugares = {
  manaus: {
    fotos: [
      { img: "img/manaus/1.jpg", legenda: "Manaus – Centro Histórico" },
      { img: "img/manaus/2.jpg", legenda: "Encontro das Águas" }
    ],
    mapa: "https://www.google.com/maps?q=Manaus+AM&output=embed"
  },

  cambixe: {
    fotos: [
      { img: "img/cambixe/1.jpg", legenda: "Comunidade do Cambixe" }
    ],
    mapa: "https://www.google.com/maps?q=Cambixe+Careiro+da+Várzea+AM&output=embed"
  },

  varrevento: {
    fotos: [
      { img: "img/varrevento/1.jpg", legenda: "Varre Vento – Itacoatiara" }
    ],
    mapa: "https://www.google.com/maps?q=Varre+Vento+Itacoatiara+AM&output=embed"
  },

  marimba: {
    fotos: [
      { img: "img/marimba/1.jpg", legenda: "Comunidade do Marimba" }
    ],
    mapa: "https://www.google.com/maps?q=Marimba+Careiro+da+Várzea+AM&output=embed"
  },

  tarauaca: {
    fotos: [
      { img: "img/tarauaca/1.jpg", legenda: "Tarauacá – Acre" }
    ],
    mapa: "https://www.google.com/maps?q=Tarauacá+AC&output=embed"
  },

  curua: {
    fotos: [
      { img: "img/curua/1.jpg", legenda: "Curuá – Pará" }
    ],
    mapa: "https://www.google.com/maps?q=Curuá+PA&output=embed"
  },

  alenquer: {
    fotos: [
      { img: "img/alenquer/1.jpg", legenda: "Alenquer – Pará" }
    ],
    mapa: "https://www.google.com/maps?q=Alenquer+PA&output=embed"
  },

  hoteltropical: {
    fotos: [
      { img: "img/hotel/1.jpg", legenda: "Hotel Tropical – Manaus" }
    ],
    mapa: "https://www.google.com/maps?q=Hotel+Tropical+Manaus&output=embed"
  }
};

let lugarAtual = null;
let slideAtual = 0;

function mostrarLugar(nome) {
  lugarAtual = lugares[nome];
  slideAtual = 0;

  document.getElementById("conteudo-lugar").style.display = "block";
  atualizarSlide();
  document.getElementById("mapa-google").src = lugarAtual.mapa;
}

function atualizarSlide() {
  document.getElementById("imagem-slide").src = lugarAtual.fotos[slideAtual].img;
  document.getElementById("legenda-slide").innerText = lugarAtual.fotos[slideAtual].legenda;
}

function mudarSlide(direcao) {
  slideAtual += direcao;

  if (slideAtual < 0) slideAtual = lugarAtual.fotos.length - 1;
  if (slideAtual >= lugarAtual.fotos.length) slideAtual = 0;

  atualizarSlide();
}
