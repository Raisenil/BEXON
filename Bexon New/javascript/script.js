// Navbar link active
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.nav-link');

    sections.forEach(function (section, index) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navbarLinks[index].classList.add('active');
        } else {
            navbarLinks[index].classList.remove('active');
        }
    });
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

