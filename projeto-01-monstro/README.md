# The Monster: Primeiro projeto do curso de Vue.js

| Um jogo de batalha simples entre dois personagens, criado como prática de renderização de listas, uso de condicionais e alguns itens introduzidos nos primeiros módulos do curso do framework Vue.js da Cod3r. | <img width="100%" src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/thumbnail.webp?token=AE7YBAEE46XT7O54DSFYUQS7FY2P2" alt=""> |
|-|-|
| Tags: HTML5, Vue.js, CSS3, Game, JavaScript                                 |
| <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-green"/> |
|    [Demonstração](https://portfolio-polazzi-projects-1.web.app/) |
|    [Postagem](https://italopolazzi.github.io/projects/monster/) |


## 

### Descrição

Proposto como exercício para treinar características do framework introduzidas nos módulos “Usando VueJS para Interagir com a DOM” e “Usando Condicionais & Renderização de Listas”. Os dois módulos apresentam binding de atributos, uso de diretivas, execução de eventos, as características da instância Vue, propriedades computadas e assistidas, renderização condicional, iteração em listas e objetos, e etc. O objetivo é a criação de um jogo simples, em que o usuário (Jogador), executa ações contra o outro personagem (Monstro). Apesar das ações de Jogador e Monstro serem executadas pelo usuário, apenas a derrota do Monstro contará como vitória na mensagem final, como se o Monstro fosse o personagem controlado pela máquina.

### Capturas de tela

| <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_1_.webp?token=AE7YBAHPXM4T26OBBELDT327FYXJC" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_2_.webp?token=AE7YBAH4RUCRWKC6566JN227FYXMW" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_3_.webp?token=AE7YBAFVVQPW4VA357JQH327FYXOE" alt=""> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

### Estória de usuário

* Meu aplicativo deve conter barras de porcentagem que exibam a porcentagem de vida do Jogador e do Monstro
* Deverá conter um botão para iniciar a partida
* Após iniciada, o botão de iniciar a partida deverá ser substituído por outros quatro botões, que representam as ações “atacar”, “ataque especial”, “curar” e “desistir”
* Ao ser executada, a ação de atacar decrementa a porcentagem de vida de ambos os jogadores, porém o Monstro recebe menos dano
* A ação com o “ataque especial” deve funcionar como o ataque, entretanto o Jogador é que receberá um dano inferior
* O botão “curar” recupera parte da vida do Jogador, mas ao mesmo tempo permite que o Monstro execute um ataque
* A ação “desistir” reinicia os dados para o estado inicial, permitindo que o jogador inicie uma nova partida
* O aplicativo deve exibir um log de todas as ações executadas durante a partida, contento informações de dano e recuperação da vida dos jogadores
* O resultado da partida deve ser exibido juntamente com um botão para iniciar um novo jogo

### Atributos extras

* Cards exibindo informações nomes e porcentagem de vida dos personagens
* Div contendo as ações que podem ser executadas durante a partida
* Lista contendo o log das ações executadas na partida (só é exibida quando ao menos uma ação foi executada)


### Aprendizados principais

* Uso da tag progress para exibição de uma barra de progresso com valor customizável e visualmente reativo
* Uso da tag template, que não é renderizada, mas condicionalmente pode exportar seu conteúdo para ser renderizado
