<script lang="ts" setup>
import type { PropType } from 'vue'

defineOptions({ name: "UiSquareList" })

defineProps({
  list: {
    type: Array as PropType<string[]>,
    default: () => [],
  }
})
</script>

<template>
  <ul class="list">
    <li
      v-for="item in list"
      :key="item.slice(0, 4)"
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
  gap: 16px;

  &__item {
    position: relative;
    padding-left: 25px;
    @include body-2;

    ::v-deep(span) {
      font-weight: 500;
    }


    &::before {
      content: "";
      position: absolute;
      width: .83vw;
      aspect-ratio: 1 / 1;
      left: 0;
      top: 2px;
      background: url("@/assets/images/icons/square.svg") center / contain no-repeat
    }
  }

  @media (max-width: 1439px) {
    &__item {
      &::before {
        width: 12px;
      }
    }
  }

  @media (max-width: 767px) {
    gap: 12px;

    &__item {
      padding-left: 16px;

      &::before {
        top: 1px;
        width: 8px;
      }
    }
  }
}
</style>
