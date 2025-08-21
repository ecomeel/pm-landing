<script lang="ts" setup>
import { type PropType } from 'vue'

defineOptions({ name: "UiArrowList" })

defineProps({
  list: {
    type: Array as PropType<string[]>,
    default: () => ([]),
  }
})
</script>

<template>
  <!-- <ul id="arrowList" class="list relative -left-[100vw]"> -->
  <ul id="arrowList" class="list">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="list__item"
      v-html="item"
    />
  </ul>
</template>

<style lang="scss" scoped>
.list {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 35px;

  &__item {
    position: relative;
    padding-left: 35px;
    @include body-2;

    ::v-deep(span) {
      font-weight: 500;
    }

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: 0;
      top: 0;
      background: url("@/assets/images/icons/arrow.svg") center / contain no-repeat
    }
  }

  @media (max-width: 1439px) {
    gap: 20px;

    &__item {
      padding-left: 25px;

      &::before {
        width: 16px;
        height: 16px;
      }
    }
  }

  @media (max-width: 1279px) {
    gap: 16px;
  }

  @media (max-width: 767px) {
    gap: 8px;

    &__item {
      padding-left: 18px;

      &::before {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
