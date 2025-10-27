<script lang="ts" setup>
import { useProject } from '@/composables'
import UiCircleText from '@/ui/UiCircleText.vue'

defineOptions({ name: "ConsultFormatSection" })

const { isMobileView } = useProject()
</script>

<template>
  <section id="format" class="consult">
    <h2 v-if="isMobileView" class="consult__title">
      Формат консультаций <span>появился не случайно</span>
    </h2>
    <div class="consult__content">
      <div class="consult__text-content">
        <h2 v-if="!isMobileView" class="consult__title">
          Формат консультаций <span>появился не случайно</span>
        </h2>
        <div class="consult__description">
          <p>
            <span>Ко мне регулярно обращаются</span> коллеги, друзья и специалисты из других команд с вопросами о работе проджект-менеджера, развитии в онлайне и карьерных переходах
          </p>
          <p>
            <span>Я поняла, что могу быть полезна не только точечно, но и комплексно</span> — так родилась идея индивидуальных консультаций
          </p>
        </div>
        <div class="consult__invite">
          <UiCircleText
            class="consult__circle"
            :color="isMobileView ? 'white' : 'black'"
            :show-arrow="!isMobileView"
          />
        </div>
      </div>

      <picture>
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/background/preview-3.webp"
          type="image/webp"
        >
        <img
          alt="preview"
          class="consult__bg"
          loading="lazy"
          src="@/assets/images/background/preview-3.jpg"
        >
      </picture>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.consult {
  padding: {
    top: 0 !important;
    bottom: 0 !important;
  };

  &__text-content {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2;
    height: 100%;
    max-width: 47vw;
    margin-right: 3.59vw;
    margin-top: 5vw;
    margin-bottom: 5vw;
  }

  &__content {
    position: relative;
    width: 100vw;
    margin-left: -5.59vw;
    display: flex;
    justify-content: flex-end;
  }

  &__title {
    @include h2;
    margin-bottom: 32px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 32px;

    > p {
      @include subtitle;

      > span {
        font-weight: 500;
        font-style: italic;
      }
    }
  }

  &__invite {
    margin-top: 32px;
    display: flex;
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
    object-position: 40%;
  }

  @media (max-width: 1439px) {
    &__text-content {
      margin: {
        top: 4vw;
        bottom: 4vw;
      };
    }

    &__description {
      gap: 24px;
    }

    &__invite {
      margin-top: 24px;
    }

    &__title {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1023px) {
    &__content {
      margin-left: -24px;
    }

    &__text-content {
      margin-right: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 767px) {
    &__title {
      margin-bottom: 24px;
    }

    &__content {
      height: 600px;
      margin-left: -24px;
      display: block;
    }

    &__text-content {
      padding: 40px 0 50px 24px;
      justify-content: space-between;

      > * {
        max-width: 62.5vw;
      }
    }

    &__bg {
      object-position: 19%;
      transform: scaleX(-1);
    }

    &__description {
      gap: 16px;

      > * {
        font-size: 16px;
        padding: 10px;
        background-color: rgba(255, 255, 255, .7);
        border-radius: 18px 18px 0 18px;
      }
    }

    &__invite {
      display: block;
    }
  }

  @media (max-width: 549px) {
    &__title {
      margin-bottom: 20px;
    }

    &__bg {
      object-position: 16%;
    }

    &__content {
      margin-left: -12px;
      height: 480px;
    }

    &__text-content {
      padding: 30px 0 40px 12px;

      > * {
        max-width: 270px;
        width: 62.5vw;
      }
    }

    &__description {
      gap: 12px;

      > p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 411px) {
    &__description {
      > p {
        font-size: 12px;
      }
    }
  }
}
</style>
