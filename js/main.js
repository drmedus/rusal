$(document).ready(function () {
    $(".header-menu").kendoMenu();
    $(".textButton").kendoButton();
    $("#admin").kendoButton();
    $(".kendoSelect").kendoDropDownList();

    $(".sortable-col.wide").kendoSortable({
        filter: ".drag-widget",
        cursor: "move",
        connectWith: ".narrow-l, .narrow-r",
        placeholder: placeholder,
        hint: hint
    });

    $(".sortable-col.narrow-l").kendoSortable({
        filter: ".drag-widget",
        cursor: "move",
        connectWith: ".wide, .narrow-r",
        placeholder: placeholder,
        hint: hint
    });

    $(".sortable-col.narrow-r").kendoSortable({
        filter: ".drag-widget",
        cursor: "move",
        connectWith: ".wide, .narrow-l",
        placeholder: placeholder,
        hint: hint
    });


    //exapand
    $(".sortable").on("click", "span.k-i-arrowhead-s", function(e) {
        var contentElement = $(e.target).closest(".drag-widget").find(".widget-content");
        $(e.target)
            .removeClass("k-i-arrowhead-s")
            .addClass("k-i-arrowhead-n");
        kendo.fx(contentElement).expand("vertical").stop().play();
    });

    //collapse
    $(".sortable").on("click", "span.k-i-arrowhead-n", function(e) {
        var contentElement = $(e.target).closest(".drag-widget").find(".widget-content");
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