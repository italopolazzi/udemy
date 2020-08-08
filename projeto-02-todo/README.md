# Lista de tarefas: Segundo desafio do curso de Vue.js

| Um aplicativo de lista de tarefas, que permite ao usuário adicionar notas simples de texto e a porcentagem de conclusão. | <img width="100%" src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/thumbnail.webp?token=AE7YBAEE46XT7O54DSFYUQS7FY2P2" alt=""> |
|-|-|
| Tags: HTML5, Vue.js, CSS3, SPA, JavaScript                                |
| <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-green"/> |
|    [Demonstração](https://portfolio-polazzi-projects-2.web.app/) |
|    [Postagem](https://italopolazzi.github.io/projects/todo/) |



## Descrição

Proposto como exercício para treinar características do framework introduzidas nos módulos “Entendendo a Instância Vue”, “Fluxo de Desenvolvimento ‘Real’ Usando Vue CLI”, “Introdução aos Componentes”, “Comunicação Entre Componentes”, “Uso Avançado de Componentes” e anteriores. Esses módulos apresentaram vários assuntos, dentre eles podem ser destacados: ciclo de vida da instância Vue; uso de plugins e mixins; criação de componentes local e global, utilização de escopo e regras para nomenclatura; comunicação entre componentes utilizando props, funções callback ou eventbus; uso de slots e componentes dinâmicos. A proposta é a criação de um aplicativo de lista de tarefas, que permita ao usuário adicionar notas simples de texto e que mostre a porcentagem de conclusão de todas. Como implementação extra, adicionei

### Capturas de tela

| <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_1_.webp?token=AE7YBAHPXM4T26OBBELDT327FYXJC" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_2_.webp?token=AE7YBAH4RUCRWKC6566JN227FYXMW" alt=""> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|

## Estória de usuário

* Meu aplicativo deve exibir a porcentagem de tarefas concluídas
* Deve haver um input que permita a inserção de uma nova tarefa
* A inserção é feita pressionando “enter” quando o foco está no input ou com o clique no botão adicionar
* Se não houverem tarefas uma mensagem como “Você está em dia!” deve ser exibida
* Tarefas concluídas devem ter uma estilização diferenciada das não-concluídas
* Deve ser possível eliminar tarefas
* O estado da aplicação deve ser persistido localmente para que seja carregado em acessos futuros


## Principais funções

* Botões para exibir todas as tarefas (padrão), apenas as concluídas ou apenas as não-concluídas.
* Barra com a porcentagem de conclusão de todos as tarefas inseridas fixada no topo
* Input para digitação do texto, que representa a tarefa, centralizado na página com o botão adicionar alinhado à sua direita
* Botões para filtrar as tarefas por status de conclusão
* Lista de tarefas na parte inferior da página
* Mensagem “Você está em dia” caso não haja nenhuma tarefa
* Efeito overline no texto de tarefas que foram marcadas como concluídas

## Aprendizados

* Manipulação de variáveis CSS com binding do Vue.js
* Uso de escopos para estilos CSS em componentes
* Uso do $emit para transmitir eventos que serão escutados nos componentes pais
* Separação de componentes em Single Files
