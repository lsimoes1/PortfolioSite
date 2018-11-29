
$(document).ready(() => {
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 2000,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: true,
      timeoutCountdown: 2000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'overlay-slide-in-top',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });

  });
$("li").click(() => {
  setTimeout(() =>{
    if($('.collapsible-body').is(':visible'))
    {
      $("footer").slideUp(500);
    }
    else
    {

      $("footer").addClass("animated slideInUp");
      $("footer").show();
    }
  }, 350);
});
var idade = document.querySelector("#idade");
var anoNascimento = 1992;
var anoAtual = new Date().getFullYear();
idade.textContent = (anoAtual - anoNascimento).toString();
