
const formElem = document.querySelector('.form-block')
const h1Element = document.querySelector('h1')
const pElement = document.querySelector('p')
const imgElement = document.querySelectorAll('icon')
const inputElement = document.querySelector('.input')
const mode = document.querySelector('.btnChangeMode')
const mainDiv = document.querySelector('.main-conteiner')


mode.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    formElem.classList.toggle("lightMode")
    h1Element.classList.toggle("lightMode")
    pElement.classList.toggle("lightMode")
    inputElement.classList.toggle("lightMode")
    mainDiv.classList.toggle("lightMode")
    for (let i = 0; i < imgElement.length; i++) {
        imgElement[i].toggle("lightMode")
    }
    if (formElem.classList.contains("lightMode")) {
        mode.textContent = "Dark Mode"
        localStorage.setItem('theme', 'light')
    } else {
        mode.textContent = "Light Mode"
        localStorage.setItem('theme', 'dark')
    }
})

formElem.addEventListener('submit', function (event) {
    event.preventDefault()
    const fullName = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm')

    const userData = {
        name: fullName.value,
        email: email.value,
        password: password.value,
    }
    const userDataString = JSON.stringify(userData)
    localStorage.setItem('userData', userDataString)

    fullName.value = ""
    email.value = ""
    password.value = ""
    confirmPassword.value = ""
})


