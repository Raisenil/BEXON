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

