const userContainer = document.createElement('ul')
const root = document.querySelector('#root')
root.append(userContainer)

let currentUserId = localStorage.getItem('userId') || 1

const showUserAndPosts = (userName, userEmail, posts) => {
  userContainer.innerHTML = ''
  const user = document.createElement('li')
  const name = document.createElement('h1')
  name.innerText = userName
  const email = document.createElement('h2')
  email.innerText = userEmail
  user.append(name, email)
  userContainer.append(user)

  posts.forEach((product) => {
    const post = document.createElement('li')
    const title = document.createElement('h4')
    title.innerText = product.title
    const body = document.createElement('p')
    body.innerText = product.body
    post.append(title, body)
    userContainer.append(post)
  })

  root.append(userContainer)
}

const getUserAndPosts = async (userId) => {
  try {
    const [userResponse, postResponse] = await Promise.all([
      fetch(`https://dummyjson.com/users/${userId}`),
      fetch(`https://dummyjson.com/posts/user/${userId}`),
    ])
    if (!userResponse.ok) {
      throw Error('User not found')
    }

    if (!postResponse.ok) {
      throw Error('no posts found for user')
    }
    const userData = await userResponse.json()
    const postData = await postResponse.json()
    console.log(userData)
    showUserAndPosts(userData.firstName, userData.email, postData.posts)

    const buttonId = document.querySelector('#next-user-button')
    buttonId.disabled = false
  } catch (error) {
    userContainer.innerHTML = `<h1>${error.message}</h1>`
    const buttonId = document.querySelector('#next-user-button')
    buttonId.disabled = true
  }
}
getUserAndPosts(currentUserId)

// КНОПКИ
const getNextUser = async () => {
  currentUserId++
  await getUserAndPosts(currentUserId)
  localStorage.setItem('userId', currentUserId)
}
const getPreviousUser = async () => {
  if (currentUserId > 1) {
    currentUserId--
    await getUserAndPosts(currentUserId)
    localStorage.setItem('userId', currentUserId)
  }
}

const appendNextUserButton = () => {
  const button = document.createElement('button')
  button.textContent = 'Next User'
  button.id = 'next-user-button'
  button.type = 'button'
  button.addEventListener('click', getNextUser)
  root.appendChild(button)
}

const appendPreviousUserButton = () => {
  const button = document.createElement('button')
  button.textContent = 'Previous User'
  button.addEventListener('click', getPreviousUser)
  root.appendChild(button)
}

appendPreviousUserButton()
appendNextUserButton()
