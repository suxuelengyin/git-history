# git-history-render(FROM VSCODE)
git-history-render is a tool to visualize the history of a git repository. 

## install

```bash
npm install git-history-render
```

## usage

```javascript

import  {GitHistory, toSCMHistoryItem} from 'git-history-render'

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
})

```
vue template: 
```html
<template>
  <GitHistoryNPM :models="models" >
    <template #commit="{item}">
      <div style="line-height: 22px">
        test commit
      </div>
    </template>
  </GitHistoryNPM>
</template>
```

## demo

![image](https://github.com/suxuelengyin/git-history/blob/master/src/assets/demo.png)
