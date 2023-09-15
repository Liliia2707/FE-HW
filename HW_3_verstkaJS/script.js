
const sectionElement = document.createElement('section')
sectionElement.style.backgroundImage = "URL('Rectangle.svg')"
sectionElement.classList.add('firstConteiner')
document.body.appendChild(sectionElement)

const h1Element = document.createElement('h1')
h1Element.textContent = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ'
sectionElement.appendChild(h1Element)

const pElement = document.createElement('p')
pElement.textContent = 'стадионы, газопроводы, мосты, дамбы'
sectionElement.appendChild(pElement)

const divElement = document.createElement('div')
divElement.classList.add('divConteiner')

for(let i = 0; i < 4; i++) {
    let box = document.createElement('div')
    box.classList.add('white-box')

    let line1 = document.createElement('h3')
    line1.innerText = '26'
    box.appendChild(line1)

    let line2 = document.createElement('h3')
    line2.innerText = 'ЛЕТ'
    box.appendChild(line2)

    let line3 = document.createElement('h3')
    line3.innerText = 'на рынке'
    box.appendChild(line3)

    divElement.appendChild(box)
}
sectionElement.appendChild(divElement)















