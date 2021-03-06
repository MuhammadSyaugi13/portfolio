const width = $(window).width();
window.addEventListener('scroll', () => {
    const scrolled = Math.ceil(window.scrollY);
    if (scrolled > 515) {
        $("nav").attr("class", "navbar bg-secondary navbar-expand-lg navbar-dark fixed-top");
    } else {
        $("nav").attr("class", "navbar navbar-expand-lg navbar-dark fixed-top");

    }
});

// loading
var loading = document.getElementById("loading");
var bgLoad = document.getElementById("bg-load");
var pWait = document.getElementById("pWait");
window.addEventListener('load', function () {
    loading.style.display = "none";
    bgLoad.style.display = "none";
    pWait.style.display = "none";

});


// carousel
for (let index = 1; index < 12; index++) {


    $(".owl-carousel").append(
        `<div class="">
        <div class="carde text-center"><img class="mx-auto" src="img/logo/${index}.png" alt=""></div>
        </div>`

    );
}



$(".owl-carousel").owlCarousel({

    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 5,
    items: (width < 761 ? 3 : 5),
    loop: true
});

    // Akhircarousel