function abrirmenu() {
    let barraMenuAberto = document.getElementById('barra-menu')

    if (barraMenuAberto.style.width == "0px") {
        barraMenuAberto.style.width = "180px";
    } else {
        barraMenuAberto.style.width = "0px";
    }
}


$('#barra-menu a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500)
});