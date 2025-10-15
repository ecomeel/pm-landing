import { useWindowSize } from "@vueuse/core"
import { computed } from "vue"

export const useProject = () => {
  const { width } = useWindowSize()

  const isMobileView = computed(() => width.value <= 767)

  return { isMobileView }
}
