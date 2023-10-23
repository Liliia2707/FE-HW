
const formElem = document.querySelector('.form-block')
const body = document.body
const savedTheme = localStorage.getItem('theme')
const themeSwitch = document.getElementById('themeSwitch')
const savedThemeIsLight = savedTheme === 'light';

themeSwitch.checked = savedThemeIsLight;

themeSwitch.addEventListener("change", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (document.body.classList.contains("lightMode")) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }

    document.body.classList.toggle("lightMode")
})

if (savedTheme === 'light') {
    body.classList.add("lightMode")
} else {
    body.classList.remove("lightMode")
}

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


