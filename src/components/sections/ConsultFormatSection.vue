<script lang="ts" setup>
import UiCircleText from '@/ui/UiCircleText.vue'

defineOptions({ name: "ConsultFormatSection" })
</script>

<template>
  <section id="format" class="consult">
    <div class="consult__text-content">
      <h2 class="consult__title">
        Формат консультаций <span>появился не случайно</span>
      </h2>
      <p class="consult__description">
        <span>Ко мне регулярно обращаются</span> коллеги, друзья и специалисты из других команд с вопросами о работе проджект-менеджера, развитии в онлайне и карьерных переходах
      </p>
      <p class="consult__description">
        <span>Я поняла, что могу быть полезна не только точечно, но и комплексно</span> — так родилась идея индивидуальных консультаций
      </p>
      <div class="consult__invite">
        <UiCircleText class="consult__circle" />
        <img
          alt="arrow icon"
          class="consult__arrow"
          src="@/assets/images/icons/long-arrow.svg"
        >
      </div>
    </div>

    <picture>
      <source
        media="(min-width: 768px)"
        srcset="@/assets/images/background/preview-3.webp"
        type="image/webp"
      >
      <source srcset="@/assets/images/background/preview-3_mobile.webp" type="image/webp">
      <source
        media="(min-width: 768px)"
        srcset="@/assets/images/background/preview-3.jpg"
        type="image/jpg"
      >
      <img
        alt="preview"
        class="consult__bg"
        src="@/assets/images/background/preview-3_mobile.jpg"
      >
    </picture>
  </section>
</template>

<style lang="scss" scoped>
.consult {
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 60px 5.59vw;

  &__text-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 47vw;
  }

  &__title {
    @include h2;
  }

  &__description {
    max-width: 40vw;
    @include subtitle;

    > span {
      font-weight: 500;
      font-style: italic;
    }
  }

  &__invite {
    display: flex;
    justify-content: flex-end;
    gap: 2vw;
  }

  &__arrow {
    transform: rotate(180deg);
  }

  &__bg {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  @media (max-width: 1439px) {

    &__text-content {
      padding: 20px;
      transform: translateX(4vw);
      @include text-mobile-background(24px, $opacity: 0.3);
    }
  }

  @media (max-width: 1023px) {
    padding: 35px 5.59vw;

    &__text-content {
      gap: 20px;
    }

    &__circle {
      width: 150px;

      :deep(p) {
        font-size: 14px;
      }
    }

    &__arrow {
      width: 130px;
    }
  }

  @media (max-width: 767px) {
    padding: 20px 24px;

    &__text-content {
      padding: 16px;
      gap: 12px;
      transform: translateX(24px);
    }

    &__description {
      max-width: 90%;
    }

    &__circle {
      width: 110px;

      :deep(p) {
        font-size: 10px;
      }
    }

    &__arrow {
      width: 100px;
    }
  }

  @media (max-width: 549px) {
    padding: 12px 24px;

    &__bg {
      object-position: 20%;
    }

    &__text-content {
      padding: 12px;
      width: 300px;
      box-sizing: border-box;
    }

    &__description {
      max-width: unset;
    }
  }
}
</style>
