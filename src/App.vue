<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { onMounted, ref } from 'vue'
import renderHistorySvg, { toSCMHistoryItem } from '../lib/renderHistorySvg.ts'
import GitHistory from '@/components/GitHistory/GitHistory.vue'
import  {GitHistory as GitHistoryNPM} from 'git-history-render'
import 'git-history-render/dist/git-render-history.css'

const models = ref()

onMounted(()=>{
   models.value = [
    toSCMHistoryItem('a', ['b', 'c']),
    toSCMHistoryItem('c', ['b']),
    toSCMHistoryItem('b', ['d', 'e']),
    toSCMHistoryItem('e', ['f']),
    toSCMHistoryItem('f', ['g']),
    toSCMHistoryItem('d', ['h']),
  ]

  // const svgs = renderHistorySvg({
  //   models: models,
  // })
  //
  // console.log(svgs)
})

</script>

<template>
  <GitHistoryNPM :models="models" >
    <template #commit="{item}">
      <div style="line-height: 22px">
        test commit
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
