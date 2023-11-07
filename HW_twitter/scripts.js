const root = document.querySelector('#root')
const form = document.querySelector('#postForm')
const textInput = document.querySelector('#text')
const userAvatarElement = document.querySelector('#userAvatar1');
const userNameElement = document.querySelector('#userName1');
const id = 16

let likeCount = ""

const renderNewPost = (post, user) => {
    const postCard = document.createElement('div')
    const postText = document.createElement('p')
    const reaction = document.createElement('img')
    const likeCounter = document.createElement('span')
    const userName = document.createElement('h3')
    const userAvatar = document.createElement('img')
    const divAvatar = document.createElement('div')
    const divPost = document.createElement('div')
    const divLike = document.createElement('div')

    postCard.classList.add('postCard')
    reaction.classList.add('reaction')
    userAvatar.classList.add('userAvatar')
    divAvatar.classList.add('divAvatar')
    divPost.classList.add('divPost')
    divLike.classList.add('divLike')


    reaction.addEventListener('click', () => {
        likeCount++
        likeCounter.innerText = likeCount
        reaction.src = 'media/liked.png'
    })

    postText.innerText = post.body
    reaction.src = 'media/React.svg'
    likeCounter.innerText = likeCount
    userName.innerText = `@${user.firstName} ${user.lastName} `
    userAvatar.src = user.image

    divLike.append(reaction, likeCounter)
    divAvatar.append(userName, postText)
    divPost.append(userAvatar, divAvatar)
    postCard.append(divPost, divLike)
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

        const postData = await response.json()

        const userResponse = await fetch(`https://dummyjson.com/user/${id}`)
        const userData = await userResponse.json()

        console.log(userData);
        renderNewPost(postData, userData)
    } catch (error) {
        console.error('Error:', error)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const newPost = {
        body: textInput.value,
        userId: id
    }
    console.log(newPost)
    addNewPost(newPost)
    textInput.value = ''
})


const getPost = async () => {
    try {
        const postResponse = await fetch('https://dummyjson.com/posts')
        const postData = await postResponse.json()
        console.log(postData.posts)

        const userResponse = await fetch(`https://dummyjson.com/users`)
        const userData = await userResponse.json()
        console.log(userData.users)

        renderUserPost(postData.posts, userData.users)

        const userWithId = userData.users.find(user => user.id === id);

        if (userWithId) {
            userAvatarElement.src = userWithId.image;
        }

    } catch (error) {
        console.error(`Произошла ошибка: ${error} `);
    }
}



const renderUserPost = (posts, users) => {

    posts.slice(0, 4).forEach(post => {
        const user = users.find(user => user.id === post.id);
        if (user) {
            const postCard = document.createElement('div')
            const postText = document.createElement('p')
            const likeCounter = document.createElement('p')
            const reaction = document.createElement('img')
            const userName = document.createElement('h3')
            const userAvatar = document.createElement('img')
            const divAvatar = document.createElement('div')
            const divPost = document.createElement('div')
            const divLike = document.createElement('div')


            postCard.classList.add('postCard')
            reaction.classList.add('reaction')
            userAvatar.classList.add('userAvatar')
            divAvatar.classList.add('divAvatar')
            divPost.classList.add('divPost')
            divLike.classList.add('divLike')

            let likeCount = post.reactions
            reaction.addEventListener('click', () => {
                likeCount++
                likeCounter.innerText = likeCount
                reaction.src = 'media/liked.png'
            })

            postText.innerText = post.body
            likeCounter.innerText = post.reactions
            reaction.src = 'media/React.svg'
            userName.innerText = `@${user.firstName} ${user.lastName} `
            userAvatar.src = user.image
            userAvatarElement.src = user.image
            divLike.append(reaction, likeCounter)
            divAvatar.append(userName, postText)
            divPost.append(userAvatar, divAvatar)
            postCard.append(divPost, divLike)
            root.append(postCard)
        }
    })
}

getPost()

// =============================================

// const root = document.querySelector('#root')
// const form = document.querySelector('#postForm')
// const textInput = document.querySelector('#text')
// const userAvatarElement = document.querySelector('#userAvatar1');
// const userNameElement = document.querySelector('#userName1');
// const id = 10

// let likeCount = ''

// const createPostElement = (post, user) => {
//     const postCard = document.createElement('div');
//     postCard.classList.add('postCard');

//     const reaction = document.createElement('img');
//     reaction.classList.add('reaction');
//     reaction.src = 'media/React.svg';

//     reaction.addEventListener('click', () => {
//         likeCount++;
//         likeCounter.innerText = likeCount;
//         reaction.src = 'media/liked.png';
//     });

//     const likeCounter = document.createElement('span');
//     likeCounter.innerText = likeCount;

//     const userName = document.createElement('p');
//     userName.innerText = `@${user.firstName} ${user.lastName} `;

//     const userAvatar = document.createElement('img');
//     userAvatar.classList.add('userAvatar');
//     userAvatar.src = user.image;

//     const postText = document.createElement('p');
//     postText.innerText = post.body;

//     const divAvatar = document.createElement('div');
//     divAvatar.append(userName, postText);



//     const divPost = document.createElement('div');
//     divPost.append(userAvatar, divAvatar);

//     const divLike = document.createElement('div');
//     divLike.append(reaction, likeCounter);

//     postCard.append(divPost, divLike);
//     return postCard;
// };

// const addNewPost = async (post) => {
//     try {
//         const response = await fetch('https://dummyjson.com/posts/add', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify(post),
//         });

//         const postData = await response.json();

//         const userResponse = await fetch('https://dummyjson.com/users/10');
//         const userData = await userResponse.json();
//         console.log(userData);

//         const postElement = createPostElement(postData, userData);
//         root.append(postElement);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const newPost = {
//         body: textInput.value,
//         userId: 1,
//     };
//     addNewPost(newPost);
//     textInput.value = '';
// });

// const getPost = async () => {
//     try {
//         const postResponse = await fetch('https://dummyjson.com/posts');
//         const postData = await postResponse.json();
//         console.log(postData.posts);

//         const userResponse = await fetch('https://dummyjson.com/users');
//         const userData = await userResponse.json();
//         console.log(userData.users);

//         postData.posts.slice(0, 4).forEach(post => {
//             const user = userData.users.find(user => user.id === post.id);
//             if (user) {
//                 const postElement = createPostElement(post, user);
//                 root.append(postElement);
//             }
//             const userWithId = userData.users.find(user => user.id === id);

//             if (userWithId) {
//                 userAvatarElement.src = userWithId.image;
//             }
//         });
//     } catch (error) {
//         console.error(`Произошла ошибка: ${error} `);
//     }
// };

// getPost();

// ==============================================
