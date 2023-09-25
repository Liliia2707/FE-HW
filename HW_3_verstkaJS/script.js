const root = document.getElementById("root")

const sectionElement = document.createElement('section')
sectionElement.style.backgroundImage = "URL('media/Rectangle.svg')"
sectionElement.classList.add('firstConteiner')

root.appendChild(sectionElement)


const h1Element = document.createElement('h1')
h1Element.textContent = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ'
sectionElement.appendChild(h1Element)

const pElement = document.createElement('p')
pElement.textContent = 'стадионы, газопроводы, мосты, дамбы'
pElement.classList.add('text-item')
sectionElement.appendChild(pElement)

const divElement = document.createElement('div')
divElement.classList.add('divConteiner')

for (let i = 0; i < 4; i++) {
    let box = document.createElement('div')
    box.classList.add('white-box')

    let line1 = document.createElement('p')
    line1.innerText = '26'
    box.appendChild(line1)

    let line2 = document.createElement('p')
    line2.innerText = 'ЛЕТ'
    box.appendChild(line2)

    let line3 = document.createElement('p')
    line3.innerText = 'на рынке'
    box.appendChild(line3)

    divElement.appendChild(box)
}
sectionElement.appendChild(divElement)

const h2Element = document.createElement('h2')
h2Element.textContent = 'НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ'
root.appendChild(h2Element)

const secondDivElem = document.createElement('div')
secondDivElem.classList.add('progect-conteiner')
root.appendChild(secondDivElem)

for (let i = 0; i < 3; i++) {
    let block = document.createElement('div')
    block.classList.add('progect-block')
    secondDivElem.appendChild(block)

    imgElem = document.createElement('img')
    imgElem.src = 'media/arena.svg';
    imgElem.alt = 'arena';
    block.appendChild(imgElem)

    let smallDiv = document.createElement('div')
    block.appendChild(smallDiv)

    let h3Element = document.createElement('h3')
    h3Element.textContent = 'Арена'
    block.appendChild(h3Element)

    let textElem = document.createElement('p')
    textElem.textContent = 'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.'
    block.appendChild(textElem)
}

const redDiv = document.createElement('div')
redDiv.classList.add('red-conteiner')
root.appendChild(redDiv)

const textDiv = document.createElement('div')
textDiv.classList.add('text-div')
redDiv.appendChild(textDiv)

const p1Elem = document.createElement('p')
p1Elem.textContent = 'САМЫЕ УМНЫЕ ПРОЕКТЫ'
textDiv.appendChild(p1Elem)

const p2Elem = document.createElement('p')
p2Elem.textContent = 'РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!'
textDiv.appendChild(p2Elem)

const btnElem = document.createElement('button')
btnElem.textContent = 'ВАШ ЗАПРОС'
redDiv.appendChild(btnElem)

const section2Elem = document.createElement('section')
section2Elem.classList.add('second-section')
root.appendChild(section2Elem)

let h4ElemFirst = document.createElement('h4')
h4ElemFirst.textContent = 'ЧЕМ МЫ ЗАНИМАЕМСЯ?'
section2Elem.appendChild(h4ElemFirst)

const greyDivFirst = document.createElement('div')
greyDivFirst.classList.add('grey-conteiner')
section2Elem.appendChild(greyDivFirst)

function createGreyBlocks(container) {
    for (let i = 0; i < 3; i++) {
        let greyBox = document.createElement('div')
        greyBox.classList.add('grey-box')
        container.appendChild(greyBox)

        let imgBuildElem = document.createElement('img')
        imgBuildElem.src = 'media/building.svg';
        imgBuildElem.alt = 'building';
        greyBox.appendChild(imgBuildElem)

        let p3Elem = document.createElement('p')
        p3Elem.textContent = 'CТРОИТЕЛЬСВТО ОФИСНЫХ ЗДАНИЙ'
        greyBox.appendChild(p3Elem)
    }
}

createGreyBlocks(greyDivFirst)

let h4ElemSecond = document.createElement('h4');
h4ElemSecond.textContent = 'ЧЕМ МЫ ЗАНИМАЕМСЯ?';
section2Elem.appendChild(h4ElemSecond);

const greyDivSecond = document.createElement('div')
greyDivSecond.classList.add('grey-conteiner')
section2Elem.appendChild(greyDivSecond)

createGreyBlocks(greyDivSecond)

const greyDivThird = document.createElement('div');
greyDivThird.classList.add('grey-conteiner');
section2Elem.appendChild(greyDivThird);

createGreyBlocks(greyDivThird);


















