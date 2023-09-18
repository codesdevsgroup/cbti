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