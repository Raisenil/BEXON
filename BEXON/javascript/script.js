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
function toggleText(projectId,buttonId,event) {
    event.preventDefault();

    var paragraph = document.getElementById(projectId);
    paragraph.classList.toggle('active');

    var button = document.getElementById(buttonId);
    var isParagraphActive = paragraph.classList.contains('active');
    
    button.src = isParagraphActive ? "Assets/icons/reviews-Icon.svg" : "Assets/icons/reviews-Info.svg";

    var contentDiv = paragraph.closest('.content');
    contentDiv.style.transition = "background-color 0.5s ease-out";
    contentDiv.style.backgroundColor = isParagraphActive ? "#2F2927" : "";
}


