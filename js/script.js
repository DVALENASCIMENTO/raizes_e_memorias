/* =========================
   MENU HAMBÚRGUER
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.classList.toggle("show");
}

/* Fecha ao clicar fora */
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const hamburger = document.querySelector(".hamburger");

  if (!menu || !hamburger) return;

  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("show");
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
      { img: "img/manaus/Hotel Tropical.jpg", legenda: "Hotel Tropical" },
      { img: "img/manaus/Hotel Tropical02.jpg", legenda: "Hotel Tropical" },
      { img: "img/manaus/Hotel Tropical03.jpg", legenda: "Hotel Tropical" },
    ],
    mapa: "https://www.google.com/maps?q=Manaus+AM&output=embed"
  },

  cambixe: {
    fotos: [
      { img: "img/cambixe/Cambixe.jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (2).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (3).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (4).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (5).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (6).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (7).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (8).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (9).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (10).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (11).jpeg", legenda: "Comunidade do Cambixe" },
      { img: "img/cambixe/Cambixe (12).jpeg", legenda: "Comunidade do Cambixe" },
    ],
    mapa: "https://www.google.com/maps?q=Cambixe+Careiro+da+Várzea+AM&output=embed"
  },

  varrevento: {
    fotos: [
      { img: "img/varrevento/Varre Vento.jpeg", legenda: "Varre Vento – Itacoatiara" },
      { img: "img/varrevento/Varre Vento (2).jpeg", legenda: "Varre Vento – Itacoatiara" },
      { img: "img/varrevento/Varre Vento (3).jpeg", legenda: "Varre Vento – Itacoatiara" },
      { img: "img/varrevento/Varre Vento (4).jpeg", legenda: "Varre Vento – Itacoatiara" },
    ],
    mapa: "https://www.google.com/maps?q=Varre+Vento+Itacoatiara+AM&output=embed"
  },

  marimba: {
    fotos: [
      { img: "img/marimba/Marimba.jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (2).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (3).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (4).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (5).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (6).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (7).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (8).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (9).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (10).jpeg", legenda: "Comunidade do Marimba" },
      { img: "img/marimba/Marimba (11).jpeg", legenda: "Comunidade do Marimba" },
    ],
    mapa: "https://www.google.com/maps?q=Marimba+Careiro+da+Várzea+AM&output=embed"
  },

  tarauaca: {
    fotos: [
      { img: "img/tarauaca/Aeroporto de Tarauacá.jpg", legenda: "Aeroporto de Tarauacá" },
      { img: "img/tarauaca/Antiga Capela de São Francisco, no bairro de Copacabana.jpg", legenda: "Antiga Capela de São Francisco, no bairro de Copacabana" },
      { img: "img/tarauaca/Antiga Capela do Seringal Paraíso, no Rio Muru..jpg", legenda: "Antiga Capela do Seringal Paraíso, no Rio Muru." },
      { img: "img/tarauaca/Antiga fachada da prefeitura e teatro municipal..jpg", legenda: "Antiga fachada da prefeitura e teatro municipal." },
      { img: "img/tarauaca/Banco de Crédito da Amazônia S.A. em Tarauacá.jpg", legenda: "Banco de Crédito da Amazônia S.A. em Tarauacá." },
      { img: "img/tarauaca/Casa de madeira em Tarauacá.jpg", legenda: "Casa de madeira em Tarauacá." },
      { img: "img/tarauaca/Casas da Colônia Marechal Hermes.jpg", legenda: "Casas da Colônia Marechal Hermes." },
      { img: "img/tarauaca/Comemoração cívica diante da Prefeitura, onde trabalhou João Vieira do Vale, em 1940..jpg", legenda: "Comemoração cívica diante da Prefeitura, onde trabalhou João Vieira do Vale, em 1940." },
      { img: "img/tarauaca/Destacamento da Força Policial do município, em comemoração ao Dia da Pátria, no ano de 1949..jpg", legenda: "Destacamento da Força Policial do município, em comemoração ao Dia da Pátria, no ano de 1949." },
      { img: "img/tarauaca/Escola Omar Sabino de Paula, no Bairro Senador Pompeu..jpg", legenda: "Escola Omar Sabino de Paula, no Bairro Senador Pompeu." },
      { img: "img/tarauaca/Fazenda São José, de José Higino..jpg", legenda: "Fazenda São José, de José Higino." },
      { img: "img/tarauaca/Grupo Escolar João Ribeiro, o mais antigo da cidade. Foi instalado em 20 de abril de 1921 pela professora Ernestina de França Cardoso, sua primeira diretora..jpg", legenda: "Grupo Escolar João Ribeiro, o mais antigo da cidade. Foi instalado em 20 de abril de 1921 pela professora Ernestina de França Cardoso, sua primeira diretora." },
      { img: "img/tarauaca/Igreja de São José na cidade de Tarauacá, toda construída de madeira, e coberta quase totalmente com folhas de palmeira..jpg", legenda: "Igreja de São José na cidade de Tarauacá, toda construída de madeira, e coberta quase totalmente com folhas de palmeira." },
      { img: "img/tarauaca/Índios Kaxinawá em Transwaal,.jpg", legenda: "Índios Kaxinawá em Transwaal." },
      { img: "img/tarauaca/Mercado Público, construído em 1931 pelo prefeito capitão Hipólito de Albuquerque e Silva..jpg", legenda: "Mercado Público, construído em 1931 pelo prefeito capitão Hipólito de Albuquerque e Silva." },
      { img: "img/tarauaca/Navio Bandeira, da Firma Leal Maia, onde hoje fica o porto do Leal Maia..jpg", legenda: "Navio Bandeira, da Firma Leal Maia, onde hoje fica o porto do Leal Maia." },
      { img: "img/tarauaca/Rua Cel. Juvêncio de Menezes..jpg", legenda: "Rua Cel. Juvêncio de Menezes." },
      { img: "img/tarauaca/Rua D. Constância de Menezes.jpg", legenda: "Rua D. Constância de Menezes." },
      { img: "img/tarauaca/Rua principal de Tarauacá.jpg", legenda: "Rua principal de Tarauacá." },
      { img: "img/tarauaca/Seringal Estirão, no rio Muru, em Tarauacá..jpg", legenda: "Seringal Estirão, no rio Muru, em Tarauacá." },
      { img: "img/tarauaca/Tarauacá em 1962.jpg", legenda: "Tarauacá em 1962." },
      { img: "img/tarauaca/Vista aérea parcial de Tarauacá, às margens do Rio Tarauacá, na confluência com o Rio Muru..jpg", legenda: "Vista aérea parcial de Tarauacá, às margens do Rio Tarauacá, na confluência com o Rio Muru." },
      { img: "img/tarauaca/Tarauacá.jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (2).jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (3).jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (4).jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (5).jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (6).jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (7).jpeg", legenda: "Tarauacá." },
      { img: "img/tarauaca/Tarauacá (8).jpeg", legenda: "Tarauacá." },
    ],
    mapa: "https://www.google.com/maps?q=Tarauacá+AC&output=embed"
  },

  curua: {
    fotos: [
      { img: "img/curua/Curuá.jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (2).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (3).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (4).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (5).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (6).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (7).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (8).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (9).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (10).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (11).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (12).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (13).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (14).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (15).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (16).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (17).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (18).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (19).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (20).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (21).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (22).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (23).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (24).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (25).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (26).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (27).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (28).jpeg", legenda: "Curuá – Pará" },
      { img: "img/curua/Curuá (29).jpeg", legenda: "Curuá – Pará" },
    ],
    mapa: "https://www.google.com/maps?q=Curuá+PA&output=embed"
  },

  alenquer: {
    fotos: [
      { img: "img/alenquer/Alenquer.jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (2).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (3).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (4).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (5).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (6).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (7).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (8).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (9).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (10).jpeg", legenda: "Alenquer – Pará" },
      { img: "img/alenquer/Alenquer (11).jpeg", legenda: "Alenquer – Pará" },
    ],
    mapa: "https://www.google.com/maps?q=Alenquer+PA&output=embed"
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

// Timeline animada subindo suavemente
const container = document.querySelector('.timeline-container');
let scrollPosition = 0;
const speed = 0.7; // ajuste da velocidade (quanto menor, mais rápido)

// Função para ativar fade-in dos itens
function fadeInItems() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const containerTop = container.getBoundingClientRect().top;
    if (itemTop - containerTop < container.offsetHeight - 50) {
      item.classList.add('active');
    }
  });
}

// Função de scroll contínuo
function animateTimeline() {
  fadeInItems();

  scrollPosition += speed;
  if (scrollPosition >= container.scrollHeight - container.offsetHeight) {
    scrollPosition = 0; // reinicia suavemente ao final
  }
  container.scrollTop = scrollPosition;

  requestAnimationFrame(animateTimeline);
}

animateTimeline();

// Menu hamburger (se houver)
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
