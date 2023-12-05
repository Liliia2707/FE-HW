export const addNewPost = async (product, callback) => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  })
  const data = await response.json()
  callback(data)
}
