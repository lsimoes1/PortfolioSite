$(document).ready(() => {
  $('.materialboxed').materialbox();
  $('.tooltipped').tooltip();

  $(".animsition").animsition({
    inClass: 'zoom-in',
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

  $('.txt-more').click(function(){
    $(this).next(".div-less").slideDown();
    $(this).css('display', 'none');
  });
  $('.txt-less').click(function(){
    $(".div-less").slideUp();
    $(this).closest(".div-more").find(".txt-more").css('display', '');
  });
});