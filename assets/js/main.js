$( document ).ready(function() {

    // WOW Animation
    new WOW().init();

    // Vanilla Titl Animation
    VanillaTilt.init(document.querySelectorAll(".slider-item"), {
        max: 25,
        speed: 400
    });
    VanillaTilt.init(document.querySelectorAll(".description-logo"), {
        max: 25,
        speed: 400
    });

    // Mobile Burger button
    $("#menu_toggle").click(function () {
        $(".menu_toggle").toggleClass("open");
        $(".mobile-menu").toggle();
        $(".mobile-dropdown-item").removeClass("toggled");
        $(".mobile-dropdown i").removeClass("arrow-rotate")
    });

    // Mobile menu accordion
    $(".mobile-dropdown").click(function () {
        let index = $(".mobile-dropdown").index(this);
        let items = $(".mobile-dropdown-item");
        let arrows = $(".mobile-dropdown i");

        items.each(function (i) {
           if (index === i && !this.classList.contains("toggled")) {
               items.removeClass("toggled");
               this.classList.toggle("toggled");
               //console.log(index, i, this);
           } else {
               this.classList.remove("toggled")
           }
        });

        arrows.each(function (i) {
            if (index === i) {
                this.classList.toggle("arrow-rotate");
            } else {
                console.log(this);
                this.classList.remove("arrow-rotate");
            }
        });


    });


});