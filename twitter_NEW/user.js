const root = document.querySelector('#root')
const userContainer = document.createElement('ul')
userContainer.classList.add('userContainer')

const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get('userId')
console.log(urlParams)
console.log(userId)

const fetchUserDataAndPost = async (userId, callback) => {
    try {
        const postResponse = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const postData = await postResponse.json()
        console.log(postData)
        const userResponse = await fetch(`https://dummyjson.com/users/${userId}`)
        const userData = await userResponse.json()

        if (!userResponse.ok) {
            throw Error('Этого юзера не существует')
        }

        callback(userData.username, userData.email, userData.image, postData.posts)
    } catch (error) {
        console.log(error);
        root.innerHTML = `<h1>${error.message}</h1>`
    }
}

const showUserAndPosts = (username, userEmail, image, posts, reactions) => {
    const userAvatar = document.createElement('img')
    const userInfo = document.createElement('li')
    const name = document.createElement('h2')
    const email = document.createElement('h3')

    userAvatar.classList.add('userAvatarProfile')

    name.innerText = username
    email.innerText = userEmail
    userAvatar.src = image
    userInfo.append(userAvatar, name, email)
    userContainer.append(userInfo)

    posts.forEach((post) => {
        const postElem = document.createElement('li')
        const title = document.createElement('h4')
        const likeCounter = document.createElement('p')
        const body = document.createElement('p')
        const reaction = document.createElement('img')
        const divLike = document.createElement('div')

        divLike.classList.add('divLikeUser')
        reaction.classList.add('reactionProfile')

        title.innerText = post.title
        body.innerText = post.body
        likeCounter.innerText = post.reactions
        reaction.src = 'media/React.svg'

        let likeCount = post.reactions
        let isLiked = false

        reaction.addEventListener('click', () => {
            if (isLiked) {
                likeCount--
                reaction.src = 'media/React.svg'
            } else {
                likeCount++
                reaction.src = 'media/liked.png'
            }

            likeCounter.innerText = likeCount
            isLiked = !isLiked
        })

        divLike.append(reaction, likeCounter)
        postElem.append(title, body, divLike)
        userContainer.append(postElem)
    })

    root.append(userContainer)
}

fetchUserDataAndPost(userId, showUserAndPosts)
