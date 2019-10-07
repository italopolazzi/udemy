<template>
  <v-container fluid class="pt-0">
    <v-layout row wrap>
      <v-flex xs12>
        <CVBanner />
      </v-flex>
      <v-flex xs12 md8 id="curriculum">
        <CVPersonalInfo />
      </v-flex>
      <v-flex xs12 md4>
        <CVProfissionalExperience />
        <CVEducationalBackground />
      </v-flex>
      <v-flex xs12>
        <CVSkills />
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
    CVSkills
  }
};
</script>
