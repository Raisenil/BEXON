// Header Sticky

$(document).ready(function () {
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        var aboutSection = document.getElementById('home');
        var header = document.querySelector('header');

        if (isElementInViewport(aboutSection)) {
            header.classList.remove('header-sticky');
        } else {
            header.classList.add('header-sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
});


// toggle icon
$(document).ready(function() {
    $(".toggle").click(function(e) {
        e.preventDefault();
        var text = $(this).siblings(".text");
        var icon = $(this).find("img");
        var content = $(this).closest(".content");

        if (text.is(":hidden")) {
            text.slideDown();
            icon.attr("src", "Assets/icons/reviews-Icon.svg");
            content.css("background-color", "#2F2927");
        } else {
            text.slideUp();
            icon.attr("src", "Assets/icons/reviews-Info.svg");
            content.css("background-color", "transparent");
        }
    });
});
