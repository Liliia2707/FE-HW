// сделать счетчик: две кнопки, одна увеличивает, другая уменьшает число, сохранять данные в localStorage, при обновлении число остается

const root = document.createElement('div')
const btnIncrement = document.createElement('button')
const btnDecrement = document.createElement('button')
const counter = document.createElement('p')

btnIncrement.classList.add('btnIncrement')
btnDecrement.classList.add('btnDecrement')
root.classList.add('root')

btnIncrement.innerText = '+'
btnDecrement.innerText = '-'
counter.innerText = !(localStorage.getItem('counter')) ? 0 : localStorage.getItem('counter')

root.appendChild(btnIncrement)
root.appendChild(btnDecrement)
root.appendChild(counter)
document.body.append(root)

btnIncrement.addEventListener('click', () => {
    +counter.innerText++
    localStorage.setItem('counter', counter.innerText)
})

btnDecrement.addEventListener('click', () => {
    +counter.innerText--
    localStorage.setItem('counter', counter.innerText)
})
