/**
 * Created by benpurslow on 28/06/2017.
 */

const navigationModule = (function() {

    function init() {
        $(".sidebar__image").on("click", function() {
            toggleMenu();
        })
    }

    function toggleMenu() {
        $(".sidebar__about").toggleClass("sidebar__about--collapsed");
        $(".sidebar__image").toggleClass("sidebar__image--active");
    }

    return {
        start: init,
        toggleMenu: toggleMenu
    }
})();

