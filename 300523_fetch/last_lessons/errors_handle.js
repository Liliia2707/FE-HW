console.log('before error')

// позволяет поймать ошибку
// код после ошибки будет выполняться
try {
  console.log('in try block 1')
  const users = 'aaa'
  const filteredArray = users.filter((el) => el.length > 4)
  console.log(filteredArray)
  console.log('in try block 2')
} catch (error) {
  console.log(error)
  console.log('in error block')
}

console.log('after error')

const v = 4
console.log(v)
// TypeError
// filter - метод массива
//  str - строка

// лишняя скобка
// console.log('aa')) //SyntaxError: Unexpected token ')'

// function () {}
//SyntaxError: Function statements require a function name

// console.log(a)
// ReferenceError: a is not defined
// sum(2, 3) //ReferenceError: sum is not defined

// catch (error) {
//     console.log(error)
// }
try {
  console.log('product')
  const productCard = document.querySelector('#product-card')
  console.log(productCard)
  const text = productCard.innerText
  console.log(text)
} catch (error) {
  console.log('error: ', error)
}
// функция которая принимает селектор и возвращает текст элемента
// если нет такого элемента то функция возвращает null

function readTextFromElement(selector) {
  try {
    const element = document.querySelector(selector)
    const text = element.innerText
    return text
  } catch (error) {
    console.log(error)
    return null
  }
}

console.log(readTextFromElement('#product-card'))
console.log(readTextFromElement('#produccard'))
console.log('after error')

function mathDivision(firstNumber, secondNumber) {
  try {
    if (secondNumber === 0) throw 'you cannot devide by 0'
    if (secondNumber === 1) throw 'you cannot use 1'
    return firstNumber / secondNumber
  } catch (error) {
    console.log(error)
    return null
  }
}

console.log(mathDivision(1, 2))
console.log(mathDivision(1, 1))
console.log('after division')
