const root = document.querySelector('#root')


function renderCard({ firstName, lastName, age, email
    , image, phone }) {
    const conteiner = document.createElement('div')
    const firstNameElem = document.createElement('p')
    const lastNameElem = document.createElement('p')
    const ageElem = document.createElement('p')
    const emailElem = document.createElement('p')
    const phoneElem = document.createElement('p')
    const imageElem = document.createElement('img')
    firstNameElem.innerText = `First Name: ${firstName}`
    lastNameElem.innerText = `Last Name: ${lastName}`
    ageElem.innerText = `Age: ${age}`
    emailElem.innerText = `Email: ${email}`
    phoneElem.innerText = `Phone: ${phone}`
    imageElem.src = image
    conteiner.append(imageElem, firstNameElem, lastNameElem, ageElem, phoneElem, emailElem)
    root.append(conteiner)
}

const fetchUser = (callback) => {
    fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then((data) => {
            callback(data)
            console.log(data)
        })
}

fetchUser(data => {
    data.users.forEach(user => {
        renderCard(user)
    })
})