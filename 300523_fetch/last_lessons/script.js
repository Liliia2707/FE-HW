const root = document.querySelector('#root')

// data = объект с сервера
const showPost = (data) => {
  const postCard = document.createElement('div')
  const title = document.createElement('h2')
  title.innerText = data.title
  const postBody = document.createElement('p')
  postBody.innerText = data.body
  postCard.append(title, postBody)
  root.append(postCard)
}

const fetchPost = (id, callback) => {
  fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      callback(data)
    })
}

fetchPost(1, (data) => showPost(data))
fetchPost(2, (postData) => showPost(postData))
fetchPost(3, (postData) => showPost(postData))

//dog.ceo/api/breeds/image/random
