// Представьте, что вы создаете игру, в которой пользователь должен угадать правильное число. Но существует ограничение на количество предположений, которые может сделать пользователь.

// Если пользователь попытается угадать больше лимита, функция должна выдать ошибку.
// Если предположение пользователя верно, оно должно вернуть true.
// Если догадка пользователя неверна, он должен вернуть false и потерять жизнь.
// Сможете ли вы закончить игру так, чтобы были соблюдены все правила?

// class Guesser {
//     constructor(number, lives) {
//         this.number = number;
//         this.lives = lives;
//     }

//     guess(n) {
//         return false;
//         if (this.lives > 0) {
//             if (n === this.number) {
//                 return true
//             } else {
//                 this.lives === 0
//                 return false
//             }
//         }
//     }
// }

// Вы уже реализовали класс Cube, но теперь нам снова нужна ваша помощь! Я говорю о конструкторах. У нас его нет. Давайте напишем второй код: один принимает целое число, а другой не обрабатывает аргументы!

// Также у нас возникла проблема с отрицательными значениями. Исправьте код, чтобы отрицательные значения были заменены положительными!

// Конструктор, не принимающий аргументов, должен присвоить 0 свойству Side куба.

class Cube {
    constructor(number = 0) {
        this.setSide(number);
    }

    getSide() {
        return this.side;
    }
    setSide(n) {
        this.side = Math.abs(n);
    }
}

const cube1 = new Cube(-6.5)
console.log(cube1.getSide())
const cube2 = new Cube()
console.log(cube2.getSide())
cube2.setSide(-6.2)
console.log(cube2.getSide())