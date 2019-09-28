<template>
  <v-container fluid>
    <v-layout wrap row fill-height>
      <v-flex xs12>
        <v-card tile flat>
          <v-card-text>
            <v-card flat>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">freeCodeCamp</div>
                  <v-list-item-title>
                    <div class="display-2">Survey Form</div>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <div class="display-1">Responsive Web Design Projects</div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="text-justify">
                <v-img :src="img.src"></v-img>
              </v-card-text>
            </v-card>

            <v-card flat>
              <v-card-title>
                <div class="display-1">Motivação</div>
              </v-card-title>
              <v-card-text
                class="text-justify"
              >O projeto foi desenvolvido seguindo a história de usuário da seção “Responsive Web Design Projects”, que integra a primeira parte dos cursos ofertados pelo freeCodeCamp para desenvolvimento web. Com o tema “Página de Tributo” o desafio era desenvolver uma site responsivo, utilizando o trio básico da web JavaScript, CSS e HTML.</v-card-text>
            </v-card>

            <v-card flat>
              <v-card-title>
                <div class="display-1">User Story</div>
              </v-card-title>
              <v-card-text class="text-left">
                <v-list dense expand>
                  <v-list-item v-for="(item, i) in user_story" :key="i">
                    <v-list-item-action>
                      <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                    </v-list-item-action>
                    <v-list-item-content v-html="item"></v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>

            <v-card flat>
              <v-card-title>
                <div class="display-1">A ideia</div>
              </v-card-title>
              <v-card-text class="text-justify">
                <!-- <TextColumns :config="{mdAndUp: 3, mdAndDown: 1}"> -->
                <p>O projeto de referência apresentou um formulário simples, com os componentes sem nenhuma estilização dos padrões dos navegadores, com labels à esquerda e inputs à direita para viewports médios e superiores; labels acima e inputs abaixo em viewports pequenos.</p>
                <p>Quis personalizar os inputs, para que os estilos como cores, tamanhos, bordas e etc pudessem ser alterados prezando pelas funcionalidades originais e compatibilidade entre navegadores. Portanto, utilizei pseudo-elementos para sobrepor os componentes padrões.</p>
                <p>Também busquei acrescentar funcionalidades extras, como botões para setar o valor máximo ou mínimo em um input de número.</p>
                <p>O formulário final segue um estilo progressivo, assim o conteúdo pode ser dividido em partes. O objetivo é que seja apresentado um elemento relativamente pequeno, já que formulários de pesquisa costumam ser longos. Os itens podem ser agrupados por assunto, dando ao usuário a impressão de avanço cada vez que termina uma sessão.</p>
                <!-- </TextColumns> -->
              </v-card-text>
            </v-card>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 md4>
                  <v-card flat>
                    <v-card-title>
                      <div class="display-1">Características principais</div>
                    </v-card-title>
                    <v-card-text class="text-left">
                      <v-list dense expand>
                        <v-list-item v-for="(item, i) in main_features" :key="i">
                          <v-list-item-action>
                            <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                          </v-list-item-action>
                          <v-list-item-content v-html="item"></v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4>
                  <v-card flat>
                    <v-card-title>
                      <div class="display-1">Principais aprendizados</div>
                    </v-card-title>
                    <v-card-text class="text-left">
                      <v-list dense expand>
                        <v-list-item v-for="(item, i) in main_learnings" :key="i">
                          <v-list-item-action>
                            <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                          </v-list-item-action>
                          <v-list-item-content v-html="item"></v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md4>
                  <v-card flat>
                    <v-card-title>
                      <div class="display-1">Dificuldades</div>
                    </v-card-title>
                    <v-card-text class="text-left">
                      <v-list dense expand>
                        <v-list-item v-for="(item, i) in difficulties" :key="i">
                          <v-list-item-action>
                            <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                          </v-list-item-action>
                          <v-list-item-content v-html="item"></v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TextColumns from "@/components/partials/TextColumns";
import { mapGetters } from "vuex";

import image from "@/assets/projects/fcc_survey_form.png";

export default {
  name: "project-details",
  data() {
    return {
      img: {
        src: image,
        alt: ""
      },
      user_story: [
        "Minha página de tributo deve conter um elemento que corresponda ao <code>id='main'</code>, que encapsula todos os outros elementos.",
        "Devo conseguir localizar um elemento que corresponda ao <code>id='title'</code>, que contém uma string (texto) que descreva o assunto da página (por exemplo “Dr. Norman Borlaug').",
        "Devo ser possível encontrar uma elemento div que corresponda ao <code>id='img-div'</code>.",
        "Com a div 'img-div', deve haver um elemento de imagem com o <code>id='image'</code>.",
        "Com a div 'img-div', deve haver um elemento <code>id='img-caption'</code> que contenha textos descrevendo a imagem exibida em img-div.",
        "Devo ver um elemento com o <code>id='tribute-info'</code>, com conteúdo textual que descreve o assunto da página de tributo.",
        "Deve haver um elemento de âncora com o <code>id='tribute-info'</code> responsável por vincular a um site externo que contém informações adicionais sobre o assunto da página de tributo. Dica: Você deve atribuir ao elemento um atributo de target e configurá-lo com valor '_blank” para que seu link seja aberto em uma nova guia (por exemplo, <code>target='_blank'</code>).",
        "A imagem deve ser redimensionado responsivamente, em relação à largura do elemento pai, sem exceder o tamanho original.",
        "A imagem deve estar centralizada no elemento pai."
      ],
      main_features: [
        "Duas seções (uma para a descrição da pesquisa e a segunda para o formulário).",
        "Formulário progressivo (estilo slide).",
        "Validação de erros com estilização em vermelho para seções que contenham campos com erros.",
        "Selecionar valor máximo ou mínimo em inputs tipo number."
      ],
      difficulties: [
        "Desconsiderei a criação de um input tipo select personalizado, pois exigiria uma lógica mais complexa, principalmente para manter a acessibilidade do componente."
      ],
      main_learnings: [
        "Uso das propriedades do Display Grid.",
        "Marcações para acessibilidade (a11y).",
        "Navegação interna usando âncoras e ids.",
        "Uso de variáveis com a função CSS <code>var()</code>."
      ]
    };
  },
  components: {
    TextColumns
  },
  computed: {
    ...mapGetters(["project"])
  }
};
</script>


<style lang="stylus" >
.v-list-item__content > code {
  flex: 0 1 auto !important;
}
</style>