<script setup lang="ts">
import { shallowRef, watch } from 'vue'
import renderHistorySvg from '../../../lib/renderHistorySvg.ts'

const props = withDefaults(
  defineProps<{
    models: any[]
    options: any
  }>(),
  {},
)

const svgDatas = shallowRef([])

watch(
  () => props.models,
  (models) => {
    if (!models?.length) return
    svgDatas.value = renderHistorySvg({
      models,
      ...(props.options || {}),
    })
  },
  { immediate: true },
)
</script>

<template>
  <div class="git-history">
    <div class="git-history-item" v-for="item in svgDatas">
      <div
        v-html="item?.svg?.outerHTML"
        :style="{
          height: item.svg.style.height,
          width: item.svg.style.width,
        }"
      ></div>
      <div class="git-history-commit" :style="{ height: item.svg.style.height }">
        <slot name="commit" :item="item.item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.git-history-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.git-history-commit {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-right: 6px;
}

.git-history-item:hover {
  background-color: Highlight;
}
</style>
