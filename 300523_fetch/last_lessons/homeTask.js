const root = document.querySelector('#root')

// параметры и аргументы функции
const showEachProduct = (arrayOfProducts) => {
  arrayOfProducts.forEach((product, index) => {
    const productCard = document.createElement('div')
    const title = document.createElement('h2')
    title.innerText = product.title
    const description = document.createElement('p')
    description.innerText = product.description

    const image = document.createElement('img')
    image.src = `./images/categories/${1}.png` // url картинки добавляем в src
    productCard.append(title, description, image)
    productCard.classList.add('.product-card')
    root.append(productCard)
  })
}

// ASYNC/AWAIT = THEN().THEN() - принцип работы
const fetchProducts = async (callback) => {
  const response = await fetch('https://dummyjson.com/products') // отправили запрос возвр промис
  const data = await response.json() // JSON --> js тип данных
  callback(data.products)
}

fetchProducts((arrayOfProducts) => showEachProduct(arrayOfProducts))

// пост но мы не знаем юзера
// мы узнали id юзера
//{ userId: 1, id: 1}
//  получить ВСЕ ПОСТЫ ЮЗЕРА по его id
