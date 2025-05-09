# git-history-render(FROM VSCODE)
git-history-render is a tool to visualize the history of a git repository. 
可视化展示git分支提交历史

## install

```bash
npm install git-history-render
```

## usage

models数据需要严格按照提交顺序排序，且每个提交的parentIds需要包含所有父提交的id。

```javascript

import  {GitHistory} from 'git-history-render'
import 'git-history-render/dist/git-render-history.css'

const models = ref()

onMounted(()=>{
   models.value = [
     {
       id: 'a',
       subject: '111',
       message: '1222',
       parentIds: ['b', 'e']
     },
     {
       id: 'e',
       subject: '111',
       message: 'eeee',
       parentIds: ['c']
     },
     {
       id: 'b',
       subject: '222',
       message: '3333',
       parentIds: ['c']
     },
     {
       id: 'c',
       subject: '333',
       message: '4444',
       parentIds: []
     }]
})

```
vue template: 
```html
<template>
  <GitHistory :models="models" >
    <template #commit="{item}">
      <div style="line-height: 22px">
        {{ item.historyItem.message }}
      </div>
    </template>
  </GitHistory>
</template>
```

## demo

![image](https://github.com/suxuelengyin/git-history/blob/master/src/assets/demo.png)


## API

### renderHistorySvg

依据models和配置，生成渲染需要的svg数据

