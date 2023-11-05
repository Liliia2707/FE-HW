const root = document.querySelector('#root')
const form = document.querySelector('#postForm')
const textInput = document.querySelector('#text')
const imgInput = document.querySelector('#img')

let likeCount = 0

const renderPost = (post, user) => {
    const postCard = document.createElement('div')
    const postText = document.createElement('p')
    const image = document.createElement('img')
    const reaction = document.createElement('img')
    const likeCounter = document.createElement('span')
    const userName = document.createElement('p')
    const userAvatar = document.createElement('img')
    const divAvatar = document.createElement('div')
    const divPost = document.createElement('div')

    postCard.classList.add('postCard')
    reaction.classList.add('reaction')
    image.classList.add('post-img')
    userAvatar.classList.add('userAvatar')
    divAvatar.classList.add('divAvatar')
    divPost.classList.add('divPost')

    reaction.addEventListener('click', () => {
        likeCount++
        likeCounter.innerText = likeCount
        reaction.classList.add('liked')
    })

    postText.innerText = post.body
    image.src = 'media/post_Img.svg'
    reaction.src = 'media/React.svg'
    likeCounter.innerText = likeCount
    userName.innerText = `@${user.maidenName} `
    userAvatar.src = user.image


    divAvatar.append(userName, postText)
    divPost.append(userAvatar, divAvatar)
    postCard.append(divPost, image, reaction, likeCounter)
    root.append(postCard)
}

const addNewPost = async (post) => {
    try {
        const response = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        const postData = await response.json();

        const userResponse = await fetch('https://dummyjson.com/user/1');
        const userData = await userResponse.json();
        console.log(userData);
        renderPost(postData, userData);
    } catch (error) {
        console.error('Error:', error);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newPost = {
        body: textInput.value,
        userId: 1
    }
    addNewPost(newPost)
    textInput.value = ''
})