<template>
  <v-card flat tile class="cv-skills">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <div class="overline"># Knowledge and</div>
          <div class="display-2 font-weight-thin">Skills</div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row>
        <v-col v-for="skill in skills" :key="skill">
          <v-card height="100%" tile flat :color="skill.color">
            <v-card-text>
              <v-col class="d-flex justify-center">
                <v-avatar size="80" color="black">
                  <v-icon dark large>mdi-{{skill.icon}}</v-icon>
                </v-avatar>
              </v-col>
              <v-col class="d-flex justify-center headline">{{skill.name}}</v-col>
            </v-card-text>
            <v-card-text>
              <v-list tile color="transparent" two-line>
                <v-list-item v-for="item in skill.items" :key="item">
                  <v-list-item-avatar>
                    <v-icon>mdi-{{item.icon}}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <div class="title">{{item.title}}</div>
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="item.subtitle">
                      <div class="subtitle">{{item.subtitle}}</div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <!-- <v-sheet class="my-2 transparent" v-for="item in skill.items" :key="item">
                <span class="mr-2"><v-icon>mdi-{{item.icon}}</v-icon></span>
                <span class="title">

                {{item.text}}
                </span>
              </v-sheet>-->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="overline mb-4"># Outras habilidades</div>
          <div
            class="body-1"
          >Git, GitHub, Windows Office, MongoDB, Ruby, PHP, WebPack, Java, Adobe XD, Montagem e Manutenção de Notebooks</div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider role="presentation"></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "cv-skills",
  data() {
    return {
      skills: {
        languages: {
          name: "Linguagens",
          color: "yellow",
          icon: "earth",
          items: [
            { title: "Português", subtitle: "Fluente", icon: "earth" },
            {
              title: "Inglês",
              subtitle: "Intermediário-Avançado",
              icon: "earth"
            },
            { title: "Alemão", subtitle: "Básico-Intermediário", icon: "earth" }
          ]
        },
        design: {
          name: "Design",
          color: "yellow",
          icon: "math-compass",
          items: [
            { title: "Vuetify", icon: "vuetify" },
            {
              title: "CSS",
              subtitle: "CSS3, SASS/SCSS, Stylus",
              icon: "language-css3"
            },
            {
              title: "Pacote adobe",
              subtitle: "Photoshop CC2018, Illustrator CC2018",
              icon: "adobe"
            }
          ]
        },
        programming: {
          name: "Programação",
          color: "yellow",
          icon: "code-braces",
          items: [
            { title: "VueJS", icon: "vuejs" },
            {
              title: "Javascript",
              subtitle: "EcmaScript 8",
              icon: "language-javascript"
            },
            { title: "HTML5", icon: "language-html5" },
            { title: "Google Firebase", icon: "firebase" }
          ]
        }
      }
    };
  }
};
</script>

<style>
</style>