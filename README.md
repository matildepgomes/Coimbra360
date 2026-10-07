# Coimbra 360

_Website_ que reúne num só lugar os eventos, a cultura e os lugares a descobrir em Coimbra.

Projeto da unidade curricular **Desenvolvimento para a Web**, da Licenciatura em Ciência de Dados para a Gestão (Coimbra Business School | ISCAC), ano letivo 2026/2027.

## Grupo

| Nº | Nome |
|---|---|
| 2024131057 | Luna Ferreira |
| 2024131564 | Matilde Gomes |

## Projeto

O Coimbra 360 é uma plataforma que reúne num só lugar os eventos, a cultura e os lugares a descobrir em Coimbra. 
Permite pesquisar eventos por data ou categoria, ver o local, horário e preço, quando aplicável aceder ao link oficial de bilhetes e encontrar sugestões perto de cada evento. 
Inclui ainda guias da cidade, um mapa, um planeador de programas e uma área para organizadores publicarem eventos e pedirem staff para eventos.

## Estrutura do website

O menu aparece em todas as páginas, com o botão Publicar evento sempre em destaque. 
No telemóvel, o menu abre a partir do botão de menu. 
O rodapé, igual em todas as páginas, dando acesso às restantes páginas.

```
Menu: Início | Eventos | Explorar Coimbra | Mapa | Trabalhar em Eventos | Favoritos | Publicar evento

Início ........................ pesquisa com calendário, agenda em destaque,
│                               categorias, "Faz o teu plano", fim de semana e guias
├── Eventos ................... agenda por dia, com pesquisa e filtros
│   └── Detalhe do evento ..... foto, descrição, local, preço, bilhetes
│                               e sugestões "Perto do evento"
├── Explorar Coimbra .......... guias da cidade e lugares a visitar
│   └── Guia .................. roteiro com os lugares recomendados
├── Mapa ...................... eventos e lugares de interesse, com filtros,
│                               para ver o que há à volta de cada evento
├── Trabalhar em Eventos ...... oportunidades, candidatura e pedido de equipa
├── Favoritos ................. eventos guardados pelo utilizador
├── Publicar evento ........... formulário de submissão para aprovação
└── Rodapé
    ├── Sobre nós ............. o projeto, perfis de utilizador e créditos
    ├── Contactos ............. formulário de contacto
    ├── Área de gestão ........ aprovar ou rejeitar pedidos e ver mensagens
    └── Privacidade ........... dados guardados no navegador
```

## Funcionalidades

### Básicas

- Agenda de eventos, por ordem cronológica e agrupada por dia
- Pesquisa por palavra-chave, data e categoria, com filtros (hoje, amanhã, fim de semana, gratuitos)
- Página de cada evento com foto, descrição, data, hora, local, preço e link oficial de bilhetes
- Categorias e subcategorias de eventos
- Favoritos guardados no navegador
- Formulário "Publicar evento", com validação e estado "pendente de aprovação"
- Área "Trabalhar em Eventos": oportunidades, candidatura e pedido de equipa
- Área de gestão para aprovar ou rejeitar pedidos
- Formulário de contactos
- Navegação com menu, caminho de navegação e site adaptado a computador e telemóvel
- Acessibilidade (descrições nas imagens, navegação por teclado, formulários legíveis por leitores de ecrã)

### Extras

- Calendário para escolher um dia ou um intervalo de datas
- "Faz o teu plano": sugestão de programa a partir das preferências do utilizador
- "Perto do evento": restaurantes, cafés e monumentos ordenados por distância
- Mapa interativo com eventos e pontos de interesse
- Guias "Explorar Coimbra"
- Versão em inglês (PT | EN)

## Esquemas

Os esquemas foram feitos no [draw.io](https://app.diagrams.net) com a biblioteca de formas Mockups. O ficheiro original está em [`docs/mockups/coimbra360.drawio`](docs/mockups/coimbra360.drawio) e tem um separador para cada esquema: a página inicial e a página de um evento, cada uma em telemóvel e em computador. Na mesma pasta está a exportação de cada separador em imagem.

No telemóvel, cada página aparece em vários ecrãs, pela ordem em que se desce: a página inicial vai do topo até ao rodapé e termina com o menu aberto, e a página do evento mostra o topo, a informação e o fim da página. As fotografias aparecem como espaços reservados e as notas a laranja explicam o que fazem alguns elementos.

### Página inicial: _Mobile_

![Página inicial em telemóvel](docs/mockups/inicio-mobile.png)

### Página inicial: _Desktop_

![Página inicial em computador](docs/mockups/inicio-desktop.png)

### Evento: _Mobile_

![Página de um evento em telemóvel](docs/mockups/evento-mobile.png)

### Evento: _Desktop_

![Página de um evento em computador](docs/mockups/evento-desktop.png)

## Referencias

_Websites_ que serviram de referência e o que se aproveitou de cada um.

_Website_:

- [Airbnb](https://www.airbnb.pt/): Pesquisa numa só barra com vários campos e cartões grandes com fotografia. 
- [Time Out Portugal](https://www.timeout.pt/): Agenda organizada por dias e secções de "o que fazer" com destaques. 
- [Agenda Cultural de Lisboa](https://www.agendalx.pt/): Filtros por data e categoria e página de evento com toda a informação prática. 
- [Eventbrite](https://www.eventbrite.pt/): Caixa de bilhetes ao lado da descrição, com o botão de compra sempre visível. 
