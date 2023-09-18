window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackTopButtonOnScroll()
}

function showNavOnScroll() {
  if (window.scrollY > 100) {
    $("#navigation").addClass("scroll")
  } else {
    $("#navigation").removeClass("scroll")
  }
}

function showBackTopButtonOnScroll() {
  if (window.scrollY > 500) {
    $('#backToTopButton').show(100)
  } else {
    $('#backToTopButton').hide(100)
  }
}

function showWhatsAppButtonOnScroll() {
  if (window.scrollY > 500) {
    $('.whatsapp-button').fadeIn(100)
  } else {
    $('.whatsapp-button').fadeOut(100)
  }
}

$(window).scroll(function() {
  showNavOnScroll()
  showBackTopButtonOnScroll()
  showWhatsAppButtonOnScroll()
});


/* Animação do texto da home */

const topics = [
  "HARDWARE",
  "CONSULTORIA EM TI",
  "AVALIAÇÃO DE SEGURANÇA",
  "OUTSOURCING/CONTRATOS",
  "AVALIAÇÃO DE SEGURANÇA",
  "OUTSOURCING/CONTRATOS",
  "VIRTUALIZAÇÃO",
  "CLOUD"
];

const textoDigitado = document.getElementById("textoDigitado");
const cursor = document.getElementById("cursor");

function typeText(index, charIndex) {
  if (charIndex < topics[index].length) {
      const topic = topics[index];
      const char = topic.charAt(charIndex);
      textoDigitado.textContent += char;
      setTimeout(function () {
          typeText(index, charIndex + 1);
      }, 100); // Intervalo de 100ms entre cada caractere
  } else {
      setTimeout(function () {
          eraseText(index, topics[index].length - 1);
      }, 1000); // 1000ms de pausa após digitar o texto
  }
}

function eraseText(index, charIndex) {
  if (charIndex >= 0) {
      const topic = topics[index];
      textoDigitado.textContent = topic.substring(0, charIndex);
      setTimeout(function () {
          eraseText(index, charIndex - 1);
      }, 20); // Intervalo de 20ms entre apagar cada caractere (mais rápido)
  } else {
      setTimeout(function () {
          const nextIndex = (index + 1) % topics.length;
          typeText(nextIndex, 0);
      }, 1100); // 1000ms de pausa após apagar o texto
  }
}

typeText(0, 0);