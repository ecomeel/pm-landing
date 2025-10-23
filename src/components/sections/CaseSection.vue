<script lang="ts" setup>
import type { ICase } from '@/types'
import CaseCard from '../cards/CaseCard.vue'
import caseImage1 from "@/assets/images/cases/case-1.jpg"
import caseImage2 from "@/assets/images/cases/case-2.jpg"

defineOptions({ name: "CaseSection" })

const workCases: ICase[] = [
  {
    subtitle: "1 год работала проджект-менеджером в проекте у <span>Сати Казановой</span>",
    results: [
      "<span>С нуля создали клуб</span> и в него вступили более 1500 девушек, женщин",
      "<span>За 1,5 месяца</span> была собрана большая команда и настроены бизнес-процессы",
      "<span>Собрали солд-аут на 1-дневное офлайн-мероприятие</span> (даже добавляли вип-места за 20-30 тысяч, так как очень просили), но итого собрали 750 человек",
      "<span>Набрали в ютубе более 120 тысяч подписчиков</span>, а в целом в соц.сетях более 350 тыс за время работы",
    ],
    pictureSource: caseImage1,
  },
  {
    subtitle: "В 2022 года я работала в проекте <span>Мари Котковой</span>",
    results: [
      "60+ учениц вступили в наставничество за 2 запуска с чеком 150.000 р",
      "Организовали камерный душевный выпускной в Москве",
    ],
    pictureSource: caseImage2,
  },
]
</script>

<template>
  <section class="cases">
    <CaseCard
      v-for="(item, idx) in workCases"
      :key="idx"
      :case-number="idx + 1"
      :work-case="item"
    />
  </section>
</template>

<style lang="scss" scoped>
.cases {
  padding-bottom: 120px;
  display: grid;
  gap: 10px;

  @media (max-width: 767px) {
    gap: 32px;
    padding-bottom: 50px;
  }
}
</style>
