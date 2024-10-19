document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.principio');

    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerHeight = window.innerHeight * 0.8; 

            if (sectionTop < triggerHeight) {
                section.classList.add('visible'); 
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
