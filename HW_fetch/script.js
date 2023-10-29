const root = document.querySelector('#root')
const postConteiner = document.querySelector('.post-conteiner')

const renderPost = (arrayOfproducts) => {
    arrayOfproducts.slice(0, 4).forEach((products) => {
        console.log(products)
        const conteiner = document.createElement('div')
        conteiner.classList.add('conteiner')
        const imageElem = document.createElement('img')
        const titleElem = document.createElement('h2')
        const priceElem = document.createElement('p')
        const descriptionElem = document.createElement('p')

        imageElem.src = products.images[0]
        titleElem.innerText = products.title
        priceElem.innerText = products.price
        descriptionElem.innerText = products.description

        conteiner.append(imageElem, titleElem, priceElem, descriptionElem)
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

