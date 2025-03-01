document.addEventListener('DOMContentLoaded', function() {

            
    const elements = document.querySelectorAll('.fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .2
    }

    const callbacks = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }

    let observer = new IntersectionObserver(callbacks, options);

    elements.forEach(element => {
        observer.observe(element);
    });

});