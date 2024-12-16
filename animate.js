const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
            observer.unobserve(entry.target); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showskill');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenSkills = document.querySelectorAll('.hiddenskill');
hiddenSkills.forEach((el) => skillObserver.observe(el));
