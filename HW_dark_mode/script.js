
const formElem = document.querySelector('.form-block')
const h1Element = document.querySelector('h1')
const pElement = document.querySelector('p')
const imgElement = document.querySelector('.black-icon')
const inputElement = document.querySelector('.input')
const mode = document.querySelector('.btnChangeMode')
const mainDiv = document.querySelector('.main-conteiner')


mode.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    formElem.classList.toggle("lightMode")
    h1Element.classList.toggle("lightMode")
    pElement.classList.toggle("lightMode")
    imgElement.classList.toggle("lightMode")
    inputElement.classList.toggle("lightMode")
    mainDiv.classList.toggle("lightMode")


    if (formElem.classList.contains("lightMode")) {
        mode.textContent = "Dark Mode"
    } else {
        mode.textContent = "Light Mode"
    }
})