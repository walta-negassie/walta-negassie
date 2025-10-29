const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        if (details.style.display === 'none') {
            details.style.display = 'block';
            btn.textContent = 'Show Less';
        } else {
            details.style.display = 'none';
            btn.textContent = 'Learn More';
        }
    });
});
