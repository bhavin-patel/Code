//*SWITCH HEADERS*
$(document).on("scroll", function() {
    if ($(document).scrollTop() > 1) {
        $("header").removeClass("large").addClass("small");
    } else {
        $("header").removeClass("small").addClass("large");
    }
});


