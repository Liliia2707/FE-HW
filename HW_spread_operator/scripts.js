// 1. Слить два объекта в один
// посмотреть как себя будет вести свойство b
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

// 2. Произвести поверхностное копирование объекта
const user = { name: 'Vasya', city: 'berlin', phone: '777-777' }
const copyUser = { ...user }
console.log(copyUser)

// 3. добавить в объект defaultSettings новое свойство border
const defaultSettings = { fontSize: '16px', color: 'black' }
const userSettings = { border: '1px solid black' }
changetSettings = { ...defaultSettings, ...userSettings }
console.log(changetSettings)
// -------или заменить const на let )----------
let defaultSettings = { fontSize: '16px', color: 'black' }
const userSettings = { border: '1px solid black' }
defaultSettings = { ...defaultSettings, ...userSettings }

// 4. Переписать своство apple на 10 используя spread operator
const fruits = { apple: 10, banana: 5, orange: 6 }
// ---тут ведь и так у apple значение 10, не поняла задание----

// 5.  Объединить три объекта
const objA = { a: 'A' }
const objB = { b: 'B' }
const objC = { c: 'C' }

const objABC = { ...objA, ...objB, ...objC }
console.log(objABC)
// Задачи посложнее

// 6. Используя spread operator поменять свойство  city
const nestedObj = { user: { name: 'Charlie', address: { city: 'London' } } }
const newObj = { ...nestedObj, ...nestedObj.user.address.city = 'Dnipro' }
console.log(nestedObj)

//7. Слить два массива в один
const hobbies1 = { hobbies: ['reading', 'movies'] }
const hobbies2 = { hobbies: ['sports', 'cooking'] }

const hobbies3 = { hobbies: [...hobbies1.hobbies, ...hobbies2.hobbies] }
console.log(hobbies3)

//8. Удалить свойство react у объекта используя spread operator

const stack = { html: true, css: true, js: true, react: false }



// 9. Если discount: true, то добавить в объект { discount: 10 }
const order = { productId: 120, quantity: 3 }
const discount = true

let newOrder

if (discount) {
    newOrder = { ...order, discount: 10 }
} else {
    newOrder = { ...order }
}
console.log(newOrder)

// 10. Добавить в массив 4
const data = { values: [1, 2, 3] }
const newData = { ...data, ...data.values.push(4) }
console.log(newData)

// На массивы

//11. Объединить два массива в один
const authors = [
    { id: 1, name: 'J.K. Rowling' },
    { id: 2, name: 'George Orwell' },
]
const moreAuthors = [
    { id: 3, name: 'Tolkien' },
    { id: 4, name: 'Isaac Asimov' },
]

const allAuthors = [...authors, ...moreAuthors]
console.log(allAuthors)

// 12. Добавить объект в массив
const movies = [
    { title: 'Inception', year: 2010 },
    { title: 'Interstellar', year: 2014 },
]
const newMovie = { title: 'Dunkirk', year: 2017 }
const addInMovies = [...movies, newMovie]
console.log(addInMovies)



// 13. Добавить свойство isActive: true в объекты
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
]

newUsers = [...users, { isActive: true }]
console.log(newUsers)

// 14. Добавить цену со скидкой (10% от цены)
const products = [
    { id: 'p1', name: 'Laptop', price: 1000 },
    { id: 'p2', name: 'Phone', price: 500 },
]
products.price * 0, 9
const newProduct = [...products, ...products.price * 0, 9]
console.log(newProduct)

// 15. Посчитать средню оценку товаров и записать в объект новое свойство rating
const products = [
    {
        id: 'p1',
        name: 'Laptop',
        brand: 'TechBrand',
        characteristics: {
            color: 'Silver',
            weight: '1.5kg',
            screenSize: '15 inches',
            storage: '256GB SSD',
            RAM: '16GB',
        },
        ratings: [5, 4, 5, 5, 3, 4],
    },
    {
        id: 'p2',
        name: 'Smartphone',
        brand: 'PhoneMaker',
        characteristics: {
            color: 'Black',
            weight: '150g',
            screenSize: '6.5 inches',
            storage: '64GB',
            RAM: '4GB',
        },
        ratings: [4, 5, 3, 4, 4, 5, 5],
    },
    {
        id: 'p3',
        name: 'Headphones',
        brand: 'SoundMakers',
        characteristics: {
            color: 'White',
            weight: '200g',
            wireless: true,
            batteryLife: '12 hours',
        },
        ratings: [3, 3, 4, 5, 4, 4],
    },
]