$(document).ready(function() {
    const navbarMenuButton = $("#navbar-menu-button");
    const menuBox = navbarMenuButton.find("#navbar-menu");

    $(document).mouseup(function(e) {
        if (navbarMenuButton.is(e.target) && !menuBox.is(e.target))
            menuBox.toggleClass("hide");

        if (!navbarMenuButton.is(e.target) && !menuBox.is(e.target))
            menuBox.addClass("hide");
    });
});