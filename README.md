# Memory Game

Este repositório contém o código-fonte de um jogo da memória desenvolvido em JavaScript puro (vanillaJS). O jogo apresenta cartas de times de futebol e o objetivo é encontrar todos os pares de cartas iguais no menor número de cliques possível.

## Descrição do Jogo

O jogo da memória consiste em encontrar todos os pares de cartas iguais. Cada carta representa um time de futebol diferente. As cartas são embaralhadas e colocadas viradas para baixo no tabuleiro. O jogador deve clicar em duas cartas para virá-las. Se as cartas forem iguais, elas permanecem viradas para cima. Se forem diferentes, elas são viradas para baixo novamente após um breve intervalo.

## Funcionalidades

- **Embaralhamento de Cartas**: As cartas são embaralhadas toda vez que o jogo é iniciado.
- **Contador de Cliques**: Conta o número de cliques realizados pelo jogador.
- **Pontuação**: Calcula a pontuação com base no número de pares encontrados.
- **Registro de Recorde**: Salva o recorde de menor número de cliques no Local Storage.
- **Botão de Reset**: Permite reiniciar o jogo.

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

Para executar o jogo localmente, você precisará apenas de um navegador da web.

### Passos para Executar o Jogo

1. Clone o repositório para sua máquina local:
   ```
   git clone https://github.com/seu-usuario/memoryGame.git
   ```
2. Clone o repositório para sua máquina local:
  ```
  cd memoryGame
  ```
3. Abra o arquivo index.html no seu navegador:
  ```
  open public/index.html
  ```

## Estrutura dos Arquivos
### `assets/css/`
Contém os arquivos de estilo (CSS) utilizados no jogo para estilização dos elementos.

### `assets/imgs/`
Contém as imagens das cartas dos times de futebol e outros ícones utilizados no jogo.

### `js/app.js`
Contém a lógica principal do jogo, incluindo a criação das cartas, o embaralhamento, a lógica de virar as cartas e o controle de pontuação.

### `js/index.js`
Contém a lógica de inicialização do jogo, configuração dos elementos DOM e manipulação do Local Storage para salvar e recuperar o recorde.

### `public/index.html`
Contém a estrutura HTML do jogo.

## Contribuição
Se você quiser contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório, criar uma branch com suas alterações e enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
