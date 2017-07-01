"use strict";

/**
 * Created by benpurslow on 28/06/2017.
 */

$(function () {
  navigationModule.start();
});
"use strict";

/**
 * Created by benpurslow on 28/06/2017.
 */

var navigationModule = function () {

    function init() {
        $(".sidebar__image").on("click", function () {
            toggleMenu();
        });
    }

    function toggleMenu() {
        $(".sidebar__about").toggleClass("sidebar__about--collapsed");
        $(".sidebar__image").toggleClass("sidebar__image--active");
    }

    return {
        start: init,
        toggleMenu: toggleMenu
    };
}();
"use strict";

/**
 * Created by benpurslow on 29/06/2017.
 */

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}