# Stock trader: Terceiro projeto do curso de Vue.js

| Um aplicativo que simula uma bolsa de valores, permitindo ao usuário acompanhar flutuações nos preços de ações e realizar compra e venda das mesmas. | <img width="100%" src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/thumbnail.webp?token=AE7YBAEE46XT7O54DSFYUQS7FY2P2" alt=""> |
|-|-|
| Tags: Bootstrap, Firebase, Vue.js, Vuex, Webpack                                 |
| <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-green"/> |
|    [Demonstração](https://portfolio-polazzi-projects-3.web.app/) |
|    [Postagem](https://italopolazzi.github.io/projects/stock-trader/) |


### Descrição

 projeto foi desenvolvido com teor didático, proposto como um dos desafios do curso Vue JS 2 - The Complete Guide. Representa um simulador de compras e vendas de ações de algumas companhias famosas, em que o usuário possui um total de fundos inicial para adicionar ou remover itens da sua carteira. Os valores, previamente cadastrados, sofrem flutuações randomicamente quando o botão "finalizar dia" é acionado, alterando de forma reativa, os preços dos itens nos cards e o total de fundos.

A proposta do projeto teve como objetivo desafiar o desenvolvedor a lidar com a reatividade de propriedades utilizando um estado global, em que alterações em um componente, podem afetar variáveis de outros componentes que não possuem um grau direto de parentesco na Virtual DOM. Também propôs a persistência dos dados utilizando o Google Firebase, para lidar com a persistência e recuperação de dados remotamente.

### Capturas de tela

| <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_1_.webp?token=AE7YBAHPXM4T26OBBELDT327FYXJC" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_2_.webp?token=AE7YBAH4RUCRWKC6566JN227FYXMW" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_3_.webp?token=AE7YBAFVVQPW4VA357JQH327FYXOE" alt=""> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_1_.webp?token=AE7YBAHPXM4T26OBBELDT327FYXJC" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_2_.webp?token=AE7YBAH4RUCRWKC6566JN227FYXMW" alt=""> | <img src="https://raw.githubusercontent.com/italopolazzi/italopolazzi.github.io/master/img/monster/screenshots/monster-_3_.webp?token=AE7YBAFVVQPW4VA357JQH327FYXOE" alt=""> |

### Estória de usuário

* Meu aplicativo deve exibir o total de fundos que meu usuário possui
* Ao encerrar o dia todos os itens devem sofrer flutuações aleatórias
* Os itens disponíveis e seus respectivos preços devem ser persistidos no Firebase
* Não deve ser permitida negociações de quantidades negativas ou superiores as disponíveis
* O usuário poderá comprar e vender ações

### Atributos extras

* Valor total das ações compradas exibido no menu principal
* Valor total da negociação exibido nos cards
