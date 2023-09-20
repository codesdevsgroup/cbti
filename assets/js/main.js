/* Version assets */

$(document).ready(function() {
  var versao = '5'; // alterar a versão aqui
  
  $('link[rel="stylesheet"]').attr('href', function() {
      return this.href + '?v=' + versao;
  });

  $('script[src]').attr('src', function() {
      return this.src + '?v=' + versao;
  });
});

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


// Função para iniciar a animação da barra de progresso com um offset
function iniciarAnimacaoComOffset() {
  const progressBars = document.querySelectorAll('.progress-bar');

  // Verifica se a seção "graphics" está visível na tela com um offset
  const graphicsSection = document.getElementById('graphics');
  const offset = 100; // Ajuste o valor do offset conforme necessário

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        // Se a seção "graphics" estiver visível com um offset, inicia a animação
        progressBars.forEach(bar => {
          bar.style.animationPlayState = 'running';
        });
      } else {
        // Se a seção "graphics" não estiver visível com um offset, pausa a animação
        progressBars.forEach(bar => {
          bar.style.animationPlayState = 'paused';
        });
      }
    });
  }, { rootMargin: `-${offset}px 500px 500px 500px` }); // Aplique o offset desejado

  observer.observe(graphicsSection);
}

// Chama a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', iniciarAnimacaoComOffset);
