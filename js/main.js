void

function($global) {
    "use strict";
    var $sidebar = $(".siderbar"),
        $mask = $(".mask"),
        $sidebar_trigger = $("#sidebar-trigger"),
        $backTop = $(".back-top");

    $sidebar_trigger.on("click", showSideBar);
    $mask.on("click", hideSideBar);
    $backTop.on("click", function() {
        $("body").animate({ scrollTop: 0 }, 800)
    })
    $global.on("scroll", function() {
        if ($global.scrollTop() > $global.height()) {
            $backTop.fadeIn();
        } else {
            $backTop.fadeOut();
        }
    })

    function showSideBar(argument) {
        $mask.fadeIn();
        $sidebar.css("transform", "translate(0,0)");
    }

    function hideSideBar(argument) {
        $mask.fadeOut();
        $sidebar.css("transform", "translate("+$sidebar.width() + "px,0)");
    }
}($(window));
