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
      { img: "img/manaus/5af09c50b6e34.jpg", legenda: "Palácio Rio Negro" },
      { img: "img/manaus/5af09c50dede5.jpg", legenda: "Barcos no Porto de Manaus" },
      { img: "img/manaus/668-120212-manaus-centrohistoricodemanaus-foto-wagnerfontoura-licenca-cc-by-2-0gr.jpg", legenda: "Centro Histórico de Manaus" },
      { img: "img/manaus/668-120214-manaus-igrejadesaosebastiaono-centrohistorico-foto-wagner-fontoura-licenca-cc-by-2-0gr.jpg", legenda: "Igreja São Sebastião" },
      { img: "img/manaus/64356f28-e971-47ec-b24c-e96f6b2d6a0f.jpg", legenda: "Ponte sobre o Rio Negro" },
      { img: "img/manaus/arena-fotografia-icaro.jpg", legenda: "Arena" },
      { img: "img/manaus/Port_of_Manaus,_Brazil.jpg", legenda: "Porto de Manaus" },
      { img: "img/manaus/Praia_da_Ponta_Negra_(Manaus).jpg", legenda: "Praia da Ponta Negra" },
      { img: "img/manaus/size_800_5-atracoes-imperdiveis-em-manaus-321dace1.jpg", legenda: "Teatro Amazonas" },
      { img: "img/manaus/teatro manaus.jpg", legenda: "Teatro Amazonas" },
      { img: "img/manaus/chafariz.jpg", legenda: "Chafariz da Praça da Matriz" },
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

function mostrarLugar(nome) {
  lugarAtual = lugares[nome];
  slideAtual = 0;

  const conteudo = document.getElementById("conteudo-lugar");
  conteudo.style.display = "block";

  atualizarSlide();
  document.getElementById("mapa-google").src = lugarAtual.mapa;

  /* 🔽 Scroll suave até as fotos */
  setTimeout(() => {
    conteudo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}
