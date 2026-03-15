// Detecta seções e atualiza o menu conforme scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu-link');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.35 // mais fácil de ativar o "risquinho"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // remove classe active de todos os links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      // adiciona active no link correspondente à seção visível
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.menu-link[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

// observa todas as seções
sections.forEach(section => {
  observer.observe(section);
});

// Atualiza ao rolar a página
window.addEventListener('scroll', setActiveLink);

const form = document.getElementById("whatsapp-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const numeroAdvogada = "5562982390606"; // coloque o numero da advogada

  const texto = `Olá, meu nome é ${nome}.
Telefone: ${telefone}

Mensagem:
${mensagem}`;

  const mensagemFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${numeroAdvogada}?text=${mensagemFormatada}`;

  window.open(url, "_blank");

});