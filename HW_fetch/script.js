const root = document.querySelector('#root')
const postConteiner = document.querySelector('.post-conteiner')

const renderPost = (arrayOfproducts) => {
    arrayOfproducts.slice(0, 8).forEach((products) => {
        console.log(products)
        const btnCard = document.createElement('button')
        const textDiv = document.createElement('div')
        const conteiner = document.createElement('div')
        const imageElem = document.createElement('img')
        const titleElem = document.createElement('h2')
        const priceElem = document.createElement('p')
        const descriptionElem = document.createElement('p')

        textDiv.classList.add('textDiv')
        btnCard.classList.add('btnCard')
        conteiner.classList.add('conteiner')

        imageElem.src = products.images[0]
        titleElem.innerText = products.title
        priceElem.innerText = products.price
        descriptionElem.innerText = products.description
        btnCard.innerText = 'Add to cart'

        textDiv.append(titleElem, priceElem, descriptionElem)
        // conteiner.append(imageElem, titleElem, priceElem, descriptionElem, btnCard)
        conteiner.append(imageElem, textDiv, btnCard)
        postConteiner.append(conteiner)
    })
}

const fetchPosts = (callback) => {
    fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => callback(data.products))
        .catch((error) => console.error(`Произошла ошибка: ${error}`))
}

fetchPosts((products) => renderPost(products))

