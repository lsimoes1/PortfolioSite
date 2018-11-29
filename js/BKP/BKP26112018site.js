
$(document).ready(() => {
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.fixed-action-btn').floatingActionButton();
    $(".border-body-effect").addClass("animated fadeIn");
    $(".cssload").show();

    setTimeout(() => {
      $(".cssload").fadeOut(600).hide;
      $(".effect-animate").addClass("animated zoomIn");
      $(".effect-animate").show();

      setTimeout(() => {
        $("footer").addClass("animated slideInUp");
        $("footer").show();
      }, 650)

    }, 2000)

  });
$("li").click(() => {
  setTimeout(() =>{
    if($('.collapsible-body').is(':visible'))
    {
      $("footer").slideUp(500); 
    }
    else
    {
      $("footer").show();
    }
  }, 350);
});
var idade = document.querySelector("#idade");
var anoNascimento = 1992;
var anoAtual = new Date().getFullYear();
idade.textContent = (anoAtual - anoNascimento).toString();
