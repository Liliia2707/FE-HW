const root = document.querySelector('#root')

const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get('userId')
console.log(urlParams)
console.log(userId)

const fetchUserDataAndPost = async (userId, callback) => {
    try {
        const [responseUser, responsePosts] = await Promise.all([
            fetch(`https://dummyjson.com/users/${userId}`),
            fetch(`https://dummyjson.com/posts/user/${userId}`)
        ])
        if (!responseUser.ok) {
            throw Error('Этого юзера не существует')
        }
        const userData = await responseUser.json()
        const postsData = await responsePosts.json()
        callback(userData.firstName, userData.email, postsData.posts)
    } catch (error) {
        console.log(error)
        root.innerHTML = `<h1>${error.message}</h1>`
    }
}
fetchUserDataAndPost(2, (firstName, email, posts) => console.log(firstName, email, posts))

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
