# Calculator: Quarto desafio do curso Vue.js

| O desafio era criar uma aplicação, que funcione como uma calculadora e que permita ao usuário compor uma expressão aritmética para visualizar o resultado da mesma.  | <img width="100%" src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/thumbnail.webp?token=AE7YBAEE46XT7O54DSFYUQS7FY2P2" alt=""> |
|-|-|
| Tags: HTML5, Vue.js, CSS3, Vuetify, JavaScript                                 |
| <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-green"/> |
|    [Demonstração](https://portfolio-polazzi-projects-4.web.app/) |
|    [Postagem](https://italopolazzi.github.io/projects/calculator/) |


### Descrição

Proposto como exercício para treinar as características do framework introduzidas nos módulos: “Manipulando Entrada de Usuário com Formulários”, “Usando e Criando Diretivas”, “Melhorando sua App com Filtros e Mixins”, “Adicionando Animações e Transições”, “Conectando com Servidor via HTTP”, “Rotas em uma Aplicação VueJS”, “Melhor Gerenciamento de Estado com Vuex” e anteriores. 

### Capturas de tela

| <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_1_.webp?token=AE7YBAHPXM4T26OBBELDT327FYXJC" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_2_.webp?token=AE7YBAH4RUCRWKC6566JN227FYXMW" alt=""> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|

### Dificuldades

* A utilização do método eval implica em riscos de segurança, pois o mesmo permite que qualquer expressão JavaScript seja executada no Front-End. Para tornar o seu uso mais seguro, a sua chamada foi encapsulada em um teste condicional utilizando expressões regulares, para testar se a expressão possui apenas dígitos numéricos, ponto, parentes e operadores aritméticos. 

### Estória de usuário

* Minha aplicação deve conter botões representando cada um dos elementos de uma expressão aritmética básica
* Deve conter uma div com texto que represente o resultado da operação
* A expressão montada pelo usuário deve ser totalmente exibida

### Atributos extras

* Zusatzfunktionen
* Operações de adição, subtração, multiplicação, divisão e porcentagem
* Dígitos de 0 a 9
* Parênteses para garantir a precedência de operações durante a avaliação
* Ponto para números reais
* Botões de limpeza e de igualdade
* Display que exibe resultados e mensagens de erros
* Entrada utilizando o teclado físico

### Aprendizados principais

* Instalação e uso do Vuetify utilizando VueCli

