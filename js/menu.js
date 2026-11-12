const botao = document.querySelector('#menu-botao');
const menu = document.querySelector('#menu-principal');
const icone = document.querySelector('#menu-icone');

function abrirMenu() {
  menu.classList.remove('hidden');
  botao.setAttribute('aria-expanded', 'true');
  icone.textContent = '✕';
}

function fecharMenu() {
  menu.classList.add('hidden');
  botao.setAttribute('aria-expanded', 'false');
  icone.textContent = '☰';
}

// Clicar no botão alterna entre aberto e fechado
botao.addEventListener('click', () => {
  const aberto = botao.getAttribute('aria-expanded') === 'true';
  if (aberto) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
    fecharMenu();
    botao.focus();
  }
});

window.matchMedia('(min-width: 768px)').addEventListener('change', (evento) => {
  if (evento.matches) {
    fecharMenu();
  }
});
