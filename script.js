// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu-link');

// Função para atualizar o link ativo baseado no scroll
function setActiveLink() {
  const fromTop = window.scrollY + 100; // ajuste offset topo se quiser

  menuLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Atualiza ao rolar a página
window.addEventListener('scroll', setActiveLink);