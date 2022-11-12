//Задание 1 Калькулятор любви//
let trans = prompt('Как зовут девушку(парня)?');
let trans1 = prompt('Как зовут парня(девушку)?');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let result = getRandomIntInclusive(0,100); 
alert(`${trans} подходит к ${trans1} на ${result}%!`);

//Задание 2 Калькулятор веса//
let ves = prompt('Какой вас вес? (кг)');
let rost = prompt('Какой у вас рост? (м)');
let BMI = ves/(Math.pow(rost,2));
if(BMI <= 18.5) alert("Недостаточный вес");
else if (BMI <= 25) alert("Нормально");
else if (BMI <= 30) alert("У вас излишек веса");
else if (BMI > 30) alert("Ожирение");

//Задание 3 Високосный год//
let god = prompt('Введите год:');
if(god%4==0 || god%400 ==0) alert('Год високосный');
else if (god%100 ==0) alert('Не является високосным');
else alert('Не является високосным');

//Задание 4 Плата ужина//
let izbrani = ['Дима', 'Катя', 'Петр', 'Лена'];
function arrayRandElement(izbrani) {
  var rand = Math.floor(Math.random() * izbrani.length);
  return izbrani[rand];
}
alert(`Оплачивать будет ${arrayRandElement(izbrani)}.`)
