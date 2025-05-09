<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { onMounted, ref } from 'vue'
import renderHistorySvg, { toSCMHistoryItem } from '../lib/renderHistorySvg.ts'
import GitHistory from '@/components/GitHistory/GitHistory.vue'
import { GitHistory as GitHistoryNPM } from 'git-history-render'
import 'git-history-render/dist/git-render-history.css'

const models = ref()

onMounted(() => {
  models.value = [
    {
      id: 'a',
      subject: '111',
      message: '1222',
      parentIds: ['b', 'e'],
    },
    {
      id: 'e',
      subject: '111',
      message: 'eeee',
      parentIds: ['c'],
    },
    {
      id: 'b',
      subject: '222',
      message: '3333',
      parentIds: ['c'],
    },
    {
      id: 'c',
      subject: '333',
      message: '4444',
      parentIds: [],
    },
  ]

  // const svgs = renderHistorySvg({
  //   models: models,
  // })
  //
  // console.log(svgs)
})
</script>

<template>
  <GitHistoryNPM :models="models">
    <template #commit="{ item }">
      <div style="line-height: 22px">
        {{ item.historyItem.message }}
      </div>
    </template>
  </GitHistoryNPM>

  <main>
    <!--    <TheWelcome />-->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
