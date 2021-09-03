let start = Number (prompt("Введите начало диапазона: ",0));
let finish = Number (prompt("Введите окончание диапазона: ",0));
let sum = 0;
while (start <= finish){
    sum+=start;
    start++;
}
alert(sum);

let first = Number (prompt("Введите первое число: ",0));
let second = Number (prompt("Введите второе число: ",0));
while (first != 0 && second !=0) {
    if (first > second) {
        first = first % second;
    }
    else {second = second % first;
    }
    alert(first + second);
};

let number = Number (prompt("Введите число: ",0));
for (i=number;i>0;i--){
    numberTwo = number % i;
    if(numberTwo == 0){
        alert(i+"");
    };
};

let number = Number (prompt("Введите число: ",0));
let numberOne = 0;
for (i=1; number/i>=1; i*= 10) {
    numberOne++;
    alert("Количество цифр: " +numberOne);
};

let positive = 0;
    let negative = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    for (let i = 1; i <= 10; i++ ) {
        const number = prompt("Введите число"); 
        if (number > 0) {
        positive++;
        };
        if (number < 0) {
        negative++;
       };
        if (number == 0) {
        zero++;
        };
        if (number % 2 == 0) {
        even++;
        };
        if (number % 2 !== 0) {
        odd++;
        };
    };
    alert('Из введенных цифр - положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.')


    do {
        let firstNumber = prompt(' Введите первое число');
        let secondNumber = prompt(' Введите второе число');
        let sign = prompt(' Введите математический оператор', '+, -, *, /')
        let answer = eval(`${firstNumber} ${sign} ${secondNumber}`);
        alert(`Ответ ${answer}`);
    } while (confirm(' Решить еще пример?'));


    do {
        let q = prompt(' Введите число', '1234567890');
        let move = Number( prompt(' На сколько цифр сдвинуть?') );
        alert(q.slice(move) + q.slice(0, move));
    } while (confirm(' Еще одно число ?'));



    const days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    let currentDay = 0;
    let nextDay;
    do {
        alert(`День недели - ${days[currentDay]}.`);
        nextDay = confirm(' Хотите увидеть следующий день?');
        currentDay++;          
        if (currentDay === days.length) {
            currentDay = 0;
        };         
    } while (nextDay);


    let tables = [];

    for (let i = 2; i <= 9; i++) {
        tables.push(`\n Таблица умножения ${i}:\n`);
        for (let j = 1; j <=10; j++) {
            tables.push(`${i} * ${j} = ${i*j}; `);
        };
    };
    alert(tables.join(''));
    console.log(tables.join(''));

    
    let userNum = Number(alert("Загадайте число от 1 до 100"));
    let lowerLimit = 0;
    let upperLimit = 100;
    let N = 50;
    while (userNum !== N ) {
        let answer = prompt(`Ваше число меньше, больше, или равно ${N}`, 'меньше, больше, равно');
        if (answer == 'больше') {
            lowerLimit = N;
            N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
        } else if (answer == 'меньше') {
            upperLimit = N; 
            N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
        } else {
            break;
        };
    };
    alert(`Задуманное число ${N}`);