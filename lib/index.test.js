const models = [
  toSCMHistoryItem('a', ['b', 'c']),
  toSCMHistoryItem('c', ['b']),
  toSCMHistoryItem('b', ['d', 'e']),
  toSCMHistoryItem('e', ['f']),
  toSCMHistoryItem('f', ['g']),
  toSCMHistoryItem('d', ['h']),
]

const res = toISCMHistoryItemViewModelArray(models)

console.log(res)

const svgs = res.map((item) => {
  const svg = renderSCMHistoryItemGraph(item)
  return `<div style="height: 22px;line-height="22px">${svg.outerHTML}<span >提交信息</span></div>`
})

const container = document.createElement('div')
container.innerHTML = svgs.join('')
document.body.appendChild(container)
