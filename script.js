// =========================
// Menu ativo conforme scroll
// =========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu-link');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.35
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const activeLink = document.querySelector(`.menu-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));
window.addEventListener('scroll', setActiveLink);

// =========================
// Botão "Fale com a Advogada"
// =========================
const botoesFale = document.querySelectorAll('.fale-conosco');

botoesFale.forEach(botao => {
  botao.addEventListener('click', () => {
    const numeroAdvogada = "5562982390606"; // número da advogada
    const url = `https://wa.me/${numeroAdvogada}`;
    window.open(url, "_blank"); // abre o WhatsApp em nova aba
  });
});

// =========================
// Formulário "Entre em contato"
// =========================
const form = document.getElementById("whatsapp-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !telefone || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  const numeroAdvogada = "5562982390606"; // número da advogada

  const texto = `Olá, meu nome é ${nome}.\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`;
  const mensagemFormatada = encodeURIComponent(texto);
  const url = `https://wa.me/${numeroAdvogada}?text=${mensagemFormatada}`;

  window.open(url, "_blank"); // abre no WhatsApp
});