const count =document.querySelector('.count')
const m = document.querySelector('.m')
const p = document.querySelector('.p')
const changeBy = document.querySelector('.changeBy')
const reset = document.querySelector('.reset')

p.addEventListener('click',() =>{
const countValue = parseInt(count.innerText)
const changeByValue = parseInt(changeBy.value)
count.innerText = countValue + changeByValue
})

m.addEventListener('click',() =>{
  const countValue = parseInt(count.innerText)
  const changeByValue = parseInt(changeBy.value)
  count.innerText = countValue - changeByValue
  })

  reset.addEventListener('click',() => {
    count.innerText = 0
  })
  




