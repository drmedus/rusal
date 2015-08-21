$(document).ready(function () {
    $(".header-menu").kendoMenu();
    $(".textButton").kendoButton();
    $("#admin").kendoButton();
    $(".kendoSelect").kendoDropDownList();

    $("#sidebar").kendoSortable({
        filter: ">div",
        cursor: "move",
        connectWith: "#main-content",
        placeholder: placeholder,
        hint: hint
    });

    $("#main-content").kendoSortable({
        filter: ">div",
        cursor: "move",
        connectWith: "#sidebar",
        placeholder: placeholder,
        hint: hint
    });

    //exapand
    $(".panel-wrap").on("click", "span.k-i-arrowhead-s", function(e) {
        var contentElement = $(e.target).closest(".widget").find(">div");
        $(e.target)
            .removeClass("k-i-arrowhead-s")
            .addClass("k-i-arrowhead-n");

        kendo.fx(contentElement).expand("vertical").stop().play();
    });

    //collapse
    $(".panel-wrap").on("click", "span.k-i-arrowhead-n", function(e) {
        var contentElement = $(e.target).closest(".widget").find(">div");
        $(e.target)
            .removeClass("k-i-arrowhead-n")
            .addClass("k-i-arrowhead-s");

        kendo.fx(contentElement).expand("vertical").stop().reverse();
    });


function placeholder(element) {
    return element.clone().addClass("placeholder");
}

function hint(element) {
    return element.clone().addClass("hint")
        .height(element.height())
        .width(element.width());
}






});