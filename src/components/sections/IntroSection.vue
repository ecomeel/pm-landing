<script lang="ts" setup>
import UiCircleText from '@/ui/UiCircleText.vue';

defineOptions({ name: "IntroSection" });
</script>

<template>
  <section class="intro">
    <header class="intro__header header">
      <h1 class="header__title">Гущина Анастасия</h1>
      <img class="header__arrow" src="@/assets/images/icons/arrow-right-bottom.svg" alt="arrow icon">
    </header>

    <h2 class="intro__subtitle">
      Проджект-менеджер 
      <span>крупных онлайн-проектов</span>
    </h2>

    <p class="intro__description">
      Провожу <b>консультации</b> для&nbsp;тех, кто&nbsp;начинает свой путь в&nbsp;онлайне и&nbsp;для&nbsp;опытных проджект&#8209;менеджеров, которые хотят уверенно расти в&nbsp;онлайн-среде: <b>системно, спокойно и&nbsp;без&nbsp;выгорания</b>
    </p>

    <div class="intro__consult">
      <img class="intro__long-arrow" src="@/assets/images/icons/long-arrow.svg" alt="arrow icon">

      <UiCircleText />
    </div>

    <picture>
      <source media="(min-width: 768px)" srcset="@/assets/images/background/preview-1.webp" type="image/webp">
      <source srcset="@/assets/images/background/preview-1_mobile.webp" type="image/webp">
      <source media="(min-width: 768px)" srcset="@/assets/images/background/preview-1.jpg" type="image/jpg">
      <img class="intro__bg" src="@/assets/images/background/preview-1_mobile.jpg" alt="preview">
    </picture>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  height: 100vh;
  width: 100%;
  position: relative;

  > *:not(:last-child) {
    position: relative;
    z-index: 1;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 56% top;
    pointer-events: none;
  }

  .header {
    padding-top: 17vh;
    display: flex;
    align-items: center;
    gap: 12px;

    &__title {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      @include main-medium;
    }

    &__arrow {
      width: 19px;
      height: 20px;
    }
  }

  &__subtitle {
    margin-top: 2.6vh;
    font-family: "Cormorant";
    font-weight: 400;
    font-size: 6.4vw;

    span {
      margin-top: 0.1vh;
      display: block;
      font-weight: 500;
      font-size: 3.75vw;
    }
  }

  &__description {
    margin-top: 2.3vw;
    max-width: 38vw;
    font-family: "Stetica";
    font-weight: 400;
    line-height: 1.4em;
    font-size: 1.45vw;

    b {
      font-weight: 500;
      font-style: italic;
    }
  }

  &__consult {
    margin-top: 8vh;
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  @media (max-width: 767px) {
    .header {
      gap: 8px;
      padding-top: 50px;
      margin-left: 16px;

      &__title {
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      }

      &__arrow {
        width: 16px;
        height: 17px;
      }
    }

    &__bg {
      object-position: 70% top;
    }

    &__subtitle {
      width: max-content;
      font-size: 42px;
      margin-top: 3.5vh;
      padding: 8px 12px 16px 14px;
      @include text-mobile-background(26px);

      span {
        margin-top: 5px;
        font-size: 30px;
      }
    }

    &__description {
      margin-top: 20px;
      font-size: 16px;
      max-width: 260px;
      padding: 12px 12px 12px 14px;
      @include text-mobile-background(26px);
    }

    &__long-arrow {
      display: none;
    }

    &__consult {
      margin-top: 6vh;
    }
  }

  @media (max-width: 630px) {
    &__bg {
      object-position: 75% bottom;
    }
  }

  @media (max-width: 549px) {
    .header {
      padding-top: 37px;

      &__title {
        font-size: 24px;
      }
    }

    &__bg {
      object-position: 60%;
    }

    &__subtitle {
      font-size: 32px;

      span {
        margin-top: 3px;
        font-size: 23px;
      }
    }

    &__description {
      padding-right: 10px;
      font-size: 12px;
      max-width: 220px;
    }
  }

  @media (max-width: 440px) {
    .header {
      margin-left: 14px;
    }

    &__bg {
      object-position: 67%;
    }

    &__subtitle, &__description, &__consult {
      margin-top: 6vh;
    }

    &__subtitle {
      font-size: 26px;
      
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
