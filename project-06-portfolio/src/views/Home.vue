<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <CVBanner />
      </v-flex>
      <v-flex xs12 md8>
        <CVPersonalInfo />
      </v-flex>
      <v-flex xs12 md4>
        <CVProfissionalExperience />
        <CVEducationalBackground />
      </v-flex>
      <v-flex xs12 md4>
        <CVSkills />
      </v-flex>
      <v-flex xs12 md8></v-flex>
      <v-flex xs12 md8>
        <v-card flat tile class="cv-personal-info">
          <v-card-text>PersonalInfo</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card flat tile class="cv-experience">
          <v-card-text>Experience</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CVBanner from "@/components/Home/CVBanner";
import CVPersonalInfo from "@/components/Home/CVPersonalInfo";
import CVProfissionalExperience from "@/components/Home/CVProfissionalExperience";
import CVEducationalBackground from "@/components/Home/CVEducationalBackground";
import CVSkills from "@/components/Home/CVSkills";
export default {
  components: {
    CVBanner,
    CVPersonalInfo,
    CVProfissionalExperience,
    CVEducationalBackground,
    CVSkills,
  }
};
</script>
