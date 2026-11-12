const botaoQuando = document.querySelector('#quando-botao');
const textoQuando = document.querySelector('#quando-texto');
const campoQuando = document.querySelector('#quando');
const calendario = document.querySelector('#quando-calendario');
const tituloMes = document.querySelector('#calendario-mes');
const corpoDias = document.querySelector('#calendario-dias');
const botaoAnterior = document.querySelector('#calendario-anterior');
const botaoSeguinte = document.querySelector('#calendario-seguinte');
const botaoLimpar = document.querySelector('#calendario-limpar');
const botaoFeito = document.querySelector('#calendario-feito');

const nomesMeses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

// Hoje, sem horas, para podermos comparar só os dias
const hoje = new Date();
hoje.setHours(0, 0, 0, 0);

// Primeiro dia do mês que está a ser mostrado
let mesAtual = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
// Dia escolhido pelo utilizador (null = qualquer dia)
let diaEscolhido = null;

// Escreve a data como AAAA-MM-DD, o formato que o campo de data usa
function escreverData(data) {
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const dia = String(data.getDate()).padStart(2, '0');
  return `${data.getFullYear()}-${mes}-${dia}`;
}

function abrirCalendario() {
  calendario.classList.remove('hidden');
  botaoQuando.setAttribute('aria-expanded', 'true');
}

function fecharCalendario() {
  calendario.classList.add('hidden');
  botaoQuando.setAttribute('aria-expanded', 'false');
}

// Escolhe o dia carregado, atualiza o texto do botão e o campo escondido
function escolherDia(botaoDia) {
  const numero = Number(botaoDia.textContent);
  diaEscolhido = new Date(mesAtual.getFullYear(), mesAtual.getMonth(), numero);
  textoQuando.textContent = diaEscolhido.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long' });
  campoQuando.value = escreverData(diaEscolhido);
  desenharMes();
}

// Desenha o título e os dias do mês que está a ser mostrado
function desenharMes() {
  const ano = mesAtual.getFullYear();
  const mes = mesAtual.getMonth();
  tituloMes.textContent = `${nomesMeses[mes]} ${ano}`;

  const diasNoMes = new Date(ano, mes + 1, 0).getDate();
  // getDay() dá 0 ao domingo; assim a semana começa à segunda (0 = segunda)
  const posicaoDoDia1 = (new Date(ano, mes, 1).getDay() + 6) % 7;

  let linhas = '';
  let celulas = '<td></td>'.repeat(posicaoDoDia1);

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const data = new Date(ano, mes, dia);
    let classes = 'dia-calendario w-full';
    let desativado = '';

    if (data < hoje) {
      classes += ' dia-passado';
      desativado = ' disabled';
    } else {
      classes += ' cursor-pointer';
    }
    if (data.getTime() === hoje.getTime()) {
      classes += ' dia-hoje';
    }
    if (diaEscolhido && data.getTime() === diaEscolhido.getTime()) {
      classes += ' dia-escolhido';
    }

    celulas += `<td class="celula-dia"><button type="button" class="${classes}"${desativado}>${dia}</button></td>`;

    // Cada linha da tabela tem 7 dias
    if ((posicaoDoDia1 + dia) % 7 === 0) {
      linhas += `<tr>${celulas}</tr>`;
      celulas = '';
    }
  }
  if (celulas !== '') {
    linhas += `<tr>${celulas}</tr>`;
  }
  corpoDias.innerHTML = linhas;

  // Cada dia passa a escolher-se ao carregar nele
  corpoDias.querySelectorAll('button').forEach((botaoDia) => {
    botaoDia.addEventListener('click', () => escolherDia(botaoDia));
  });

  // Não se pode voltar a meses que já passaram
  if (ano === hoje.getFullYear() && mes === hoje.getMonth()) {
    botaoAnterior.classList.add('invisible');
  } else {
    botaoAnterior.classList.remove('invisible');
  }
}

// Carregar no botão abre ou fecha o calendário
botaoQuando.addEventListener('click', () => {
  if (calendario.classList.contains('hidden')) {
    abrirCalendario();
  } else {
    fecharCalendario();
  }
});

botaoAnterior.addEventListener('click', () => {
  mesAtual = new Date(mesAtual.getFullYear(), mesAtual.getMonth() - 1, 1);
  desenharMes();
});

botaoSeguinte.addEventListener('click', () => {
  mesAtual = new Date(mesAtual.getFullYear(), mesAtual.getMonth() + 1, 1);
  desenharMes();
});

botaoLimpar.addEventListener('click', () => {
  diaEscolhido = null;
  textoQuando.textContent = 'Qualquer dia';
  campoQuando.value = '';
  desenharMes();
});

botaoFeito.addEventListener('click', fecharCalendario);

// A tecla Escape fecha o calendário e devolve o foco ao botão
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && !calendario.classList.contains('hidden')) {
    fecharCalendario();
    botaoQuando.focus();
  }
});

// Carregar fora do calendário também o fecha
document.addEventListener('click', (evento) => {
  // Ao escolher um dia, os dias são redesenhados e o botão carregado deixa de existir na página
  if (!evento.target.isConnected) {
    return;
  }
  if (!botaoQuando.contains(evento.target) && !calendario.contains(evento.target)) {
    fecharCalendario();
  }
});

desenharMes();