// Selecionando o botão de toggle e o menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Adicionando o evento de clique para alternar a visibilidade do menu
navToggle.addEventListener('click', () => {
  // Alterna a classe 'show' para exibir ou esconder o menu
  navMenu.classList.toggle('show');
});
