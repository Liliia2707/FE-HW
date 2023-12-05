import { addNewPost } from './requests.js'

const root = document.querySelector('#root')
const form = document.querySelector('form')
const titleValue = document.querySelector('#title')
const descriptionValue = document.querySelector('#description')

const showProduct = (product) => {
  const productCard = document.createElement('div')
  const title = document.createElement('h2')
  title.innerText = product.title
  const description = document.createElement('p')
  description.innerText = product.description
  productCard.append(title, description)
  root.append(productCard)
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const newProduct = {
    title: titleValue.value,
    description: descriptionValue.value,
  }
  addNewPost(newProduct, (product) => showProduct(product))

  titleValue.value = ''
  descriptionValue.value = ''
})
