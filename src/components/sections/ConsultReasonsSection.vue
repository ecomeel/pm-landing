<script lang="ts" setup>
import type { IInfoCard } from '@/types';
import InfoBlock from '../InfoBlock.vue';

defineOptions({ name: "ConsultReasonsSection" });

const reasons: IInfoCard[] = [
  {
    title: "Вы работаете проджект-менеджером, но",
    list: [
      "<span>Ощущаете, что застряли:</span> много задач, ответственности, и не понимаете куда как двигаться дальше;",
      "<span>Получаете меньше, чем хотели бы</span> — работаете на износ, гасите авралы, а зарплата не растёт;",
      "Всё ещё <span>не чувствуете уверенности:</span> не хватает структуры, ясности и чёткого понимания своей роли;",
      "<span>Часто сомневаетесь в&nbsp;себе</span>, ловите синдром самозванца&nbsp;— несмотря на&nbsp;опыт и&nbsp;результат. Как&nbsp;будто «ещё&nbsp;не&nbsp;заслужили», «мало знаете», «не&nbsp;до&nbsp;конца подходите»."
    ]
  },
  {
    title: "Только думаете о том, чтобы пойти в онлайн",
    list: [
      "<span>Не знаете, с чего начать</span>: какие скиллы нужны, как искать проекты, что писать в резюме;",
      "<span>Боитесь ошибиться с выбором</span>: не знаете, какая сфера, какая роль, какие форматы вам подойдут;",
      "Боитесь, что «не потянете» или что уже «все всё умеют, а вы опоздали»;",
      "<span>Не понимаете, у кого учиться</span>: курсов много, инфы ещё больше — всё путается в голове, хочется просто дорожную карту."
    ]
  },
]
</script>

<template>
  <section id="consult" class="consult">
    <h2 class="consult__title">
      Вам <span>нужно</span> на консультацию, если:
    </h2>

    <InfoBlock class="consult__reasons" :cards="reasons" />
  </section>
</template>

<style lang="scss" scoped>
.consult {
  padding-top: 100px;
  padding-bottom: 130px;

  &__title {
    margin-bottom: 40px;
    @include h2;
  }

  @media (max-width: 1279px) {
    padding-top: 120px;
    padding-bottom: 110px;
  }

  @media (max-width: 767px) {
    &__title {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 549px) {
    padding-bottom: 0;
    padding-top: 50px;
  }
}
</style>
