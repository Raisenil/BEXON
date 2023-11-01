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