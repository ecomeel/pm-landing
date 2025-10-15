<script lang="ts" setup>
import type { IInfoCard } from '@/types'
import InfoBlock from '../InfoBlock.vue'
import { onMounted } from 'vue'
import { animate, stagger, onScroll } from 'animejs'

defineOptions({ name: "ConsultReasonsSection" })

const reasons: IInfoCard[] = [
  {
    title: "Вы работаете проджект-менеджером, но",
    list: [
      "<span>Ощущаете, что застряли:</span> много задач, ответственности, и не понимаете куда как двигаться дальше;",
      "<span>Получаете меньше, чем хотели бы</span> — работаете на износ, гасите авралы, а зарплата не растёт;",
      "Всё ещё <span>не чувствуете уверенности:</span> не&nbsp;хватает структуры, ясности и чёткого понимания своей роли;",
      "<span>Часто сомневаетесь в&nbsp;себе</span>, ловите синдром самозванца&nbsp;— несмотря на&nbsp;опыт и&nbsp;результат. Как&nbsp;будто «ещё&nbsp;не&nbsp;заслужили», «мало знаете», «не&nbsp;до&nbsp;конца подходите»."
    ]
  },
  {
    title: "Только думаете пойти в онлайн",
    list: [
      "<span>Не знаете, с чего начать</span>: какие скиллы нужны, как искать проекты, что писать в резюме;",
      "<span>Боитесь ошибиться с выбором</span>: не&nbsp;знаете, какая сфера, какая роль, какие форматы вам подойдут;",
      "Боитесь, что «не потянете» или что уже «все всё умеют, а вы опоздали»;",
      "<span>Не понимаете, у кого учиться</span>: курсов много, инфы ещё больше — всё путается в голове, хочется просто дорожную карту."
    ]
  },
]

onMounted(() => {
  animate(".consult #squareListItem", {
    opacity: [0, 1],
    delay: stagger(150),
    duration: 800,
    autoplay: onScroll({
      container: ".page",
      target: ".consult__reasons",
    })
  })
})
</script>

<template>
  <section id="consult" class="consult">
    <h2 class="consult__title">
      Вам <span>нужно</span> на консультацию, если:
    </h2>

    <InfoBlock :cards="reasons" class="consult__reasons" />
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
    padding-top: 100px;
    padding-bottom: 110px;
  }

  @media (max-width: 767px) {
    padding-top: 30px;

    &__title {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 549px) {
    padding-bottom: 0;

    &__title {
      margin-bottom: 12px;
    }
  }
}
</style>
