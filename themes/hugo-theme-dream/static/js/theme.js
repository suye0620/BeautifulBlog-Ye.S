"use strict";
var dark = "inverted",
    localStore = window.localStorage,
    isDark = localStore.getItem("hugo-theme-dream-is-dark");
isDark = isDark || (window.defaultDark ? "y" : isDark);
var darkBackground = function () {
        (window.backgroundDark || window.backgroundImageDark) && $("body").toggleClass("default").toggleClass("dark")
    },
    dark404 = function () {
        if ((window.backgroundDark || window.backgroundImageDark) && $(".dream-404-container").length) {
            $(".dream-404-container h1").toggleClass(dark);
            var a = $(".dream-404-container button");
            a.toggleClass(dark), a.toggleClass("secondary")
        }
    },
    darkHeadImage = function () {
        if("y" === isDark) {

            document.querySelector('div.ui.small.circular.image img[alt = "avatar"]').src='/img/touxiang2.jpg';
            // document.querySelector('div.author img[alt = "avatar"]').src='/img/touxiang2.jpg';
           }else {
           
            document.querySelector('div.ui.small.circular.image img[alt = "avatar"]').src='/img/touxiang.jpg';
            // document.querySelector('div.author img[alt = "avatar"]').src='/img/touxiang.jpg';
           }
    },
    darkNavMenu = function () {
        (window.backgroundDark || window.backgroundImageDark) && $(".dream-nav").toggleClass(dark);
        var a = window.overlayScrollbarsInstance;
        window.fixedNav && a && 0 < a.scroll().position.y && $(".dream-nav").css("background", "y" === window.isDark ? window.backgroundDark : window.background)
    },
    darkHeaderElements = function () {
        if ($(".dream-header").length) {
            var a = $(".dream-header .ui.header"),
                e = $(".dream-header .ui.list");
            a.toggleClass(dark), e.toggleClass(dark)
        }
    },
    darkCards = function () {
        $(".dream-card").toggleClass(dark)
    },
    darkSingle = function () {
        var a = $(".dream-single .ui.segment");
        a.length && (a.toggleClass(dark), $(".dream-single h1.ui.header").toggleClass(dark), setThemeForUtterances(), "function" == typeof setHighlightTheme && setHighlightTheme(), $(".toc").toggleClass(dark), $(".actions").toggleClass(dark));
        $(".dream-scroll-to-top").toggleClass(dark)
    },
    darkTables = function () {
        $(".dream-single table").map(function () {
            this.style.color ? this.style.color = "" : this.style.color = "black"
        })
    },
    darkPostsSection = function () {
        $(".ui.segment.dream-posts-section").toggleClass(dark)
    },
    darkCategoriesSection = function () {
        $(".ui.segment.dream-categories-section").toggleClass(dark)
    },
    darkTagsSection = function () {
        $(".ui.segment.dream-tags-section").toggleClass(dark)
    },
    darkBack = function () {
        $(".dream-back .ui.segment").toggleClass(dark)
    },
    darkFooter = function () {
        $("footer.ui.segment").toggleClass(dark)
    },
    darkSearch = function () {
        $("#dream-search").toggleClass(dark)
    };

function toggleDark() {
    darkBackground(), dark404(), darkNavMenu(), darkHeaderElements(), darkCards(), darkSingle(), darkTables(), darkPostsSection(), darkCategoriesSection(), darkTagsSection(),darkHeadImage(), darkBack(), darkFooter(), darkSearch(), Array.isArray(window.darkFunctions) && darkFunctions.forEach(function (a) {
        return a()
    })
}
var setThemeForUtterances = function () {
    var a = document.querySelector("iframe.utterances-frame");
    a && a.contentWindow.postMessage({
        type: "set-theme",
        theme: "y" === isDark ? "github-dark" : "github-light"
    }, "https://utteranc.es")
};
window.addEventListener("message", function (a) {
    "https://utteranc.es" === a.origin && setThemeForUtterances()
});
var iconSwitchs = $(".theme-switch");

function themeSwitch(a) {
    a.preventDefault(), isDark = "y" === isDark ? (iconSwitchs.removeClass("moon"), iconSwitchs.addClass("sun"), localStore.setItem("hugo-theme-dream-is-dark", "n"), "n") : (iconSwitchs.removeClass("sun"), iconSwitchs.addClass("moon"), localStore.setItem("hugo-theme-dream-is-dark", "y"), "y"), toggleDark()
}
"y" === isDark ? (iconSwitchs.addClass("moon"), toggleDark()) : iconSwitchs.addClass("sun");
