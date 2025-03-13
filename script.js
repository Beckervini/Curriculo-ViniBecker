document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(id) {
        hideAllSections();
        const section = document.querySelector(id);
        if (section) {
            section.style.display = 'block';
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            showSection(id);
        });
    });

    // Exibe a primeira seção ao carregar a página
    hideAllSections();
    showSection('#sobre'); // Agora garante que "Sobre Mim" aparece por padrão
});
