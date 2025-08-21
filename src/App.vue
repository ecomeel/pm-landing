<script setup lang="ts">
import IntroSection from './components/sections/IntroSection.vue'
import HeaderPage from './components/HeaderPage.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ConsultReasonsSection from './components/sections/ConsultReasonsSection.vue'
import AdditionalAdvantagesSection from './components/sections/AdditionalAdvantagesSection.vue'
import StepsSection from './components/sections/StepsSection.vue'
import ConsultFormatSection from './components/sections/ConsultFormatSection.vue'
import RequestSection from './components/sections/RequestSection.vue'
import CaseSection from './components/sections/CaseSection.vue'
import ReviewsSection from './components/sections/ReviewsSection.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <div class="page">
    <HeaderPage />
    <main class="page__content">
      <IntroSection />
      <AboutSection />
      <ConsultReasonsSection />
      <StepsSection />
      <AdditionalAdvantagesSection />
      <ConsultFormatSection />
      <RequestSection />
      <CaseSection />
      <ReviewsSection />
    </main>
    <FooterPage />
  </div>
</template>

<style scoped lang="scss">
.page {
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;

  &__content {
    overflow: hidden;
    > * {
      // padding: 0 5.59vw;
      padding: {
        left: 5.59vw;
        right: 5.59vw;
      };
    }
  }

  @media (max-width: 1023px) {
    &__content > * {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  @media (max-width: 549px) {
    &__content > * {
      padding: {
        left: 16px;
        right: 16px;
      };
    }
  }
}
</style>
