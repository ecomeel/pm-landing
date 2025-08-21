<script lang="ts" setup>
import type { IInfoCard } from '@/types'
import InfoBlock from '../InfoBlock.vue'

defineOptions({ name: "AdditionalAdvantagesSection" })

const additionalAdvantages: IInfoCard[] = [
  {
    title: "Если ты только начинаешь свой путь в онлайне",
    list: [
      "Шаблон резюме",
      "Чек-лист <span>«Как выйти на первые проекты»</span>: что знать, где искать, как подать себя и тд",
    ]
  },
  {
    title: "Если у тебя уже есть опыт",
    list: [
      "Пример задачника на запуск",
      "Введение сотрудника в проект и тд",
    ]
  },
]
</script>

<template>
  <section class="additional">
    <h2 class="additional__title">
      Что вы получите <span>дополнительно</span> после консультации?
    </h2>
    <p class="additional__subtitle">
      Каждая консультация — это не просто&nbsp;разговор, а конкретная опора под&nbsp;твой&nbsp;следующий шаг
    </p>
    <p class="additional__subtitle">
      Поэтому после неё ты получаешь материалы под свой запрос, которые помогут двигаться дальше — уже с&nbsp;инструментами в&nbsp;руках
    </p>
    <InfoBlock :cards="additionalAdvantages" class="additional__info-block" />
  </section>
</template>

<style lang="scss" scoped>
.additional {
  padding-bottom: 230px;

  &__title {
    max-width: 75vw;
    margin-bottom: 30px;
    @include h2;
  }

  &__subtitle {
    max-width: 70vw;
    @include subtitle;

    &:last-of-type {
      margin-top: 20px;
    }
  }

  &__info-block {
    margin-top: 40px;
  }

  @media (max-width: 1023px) {
    padding-bottom: 200px;
  }

  @media (max-width: 767px) {
    padding-bottom: 150px;

    &__title {
      margin-bottom: 16px;
    }

    &__subtitle:last-of-type {
      margin-top: 12px;
    }

    &__info-block {
      margin-top: 28px;
    }
  }

  @media (max-width: 550px) {
    padding-bottom: 70px;

    &__title {
      max-width: 400px;
    }

    &__subtitle {
      max-width: 340px;
    }
  }
}
</style>
