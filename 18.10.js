// порядковвый номер дней недели
let a = 5;
switch (a) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    default:
        console.log("Воскресенье");
}
//  название масти 
let b = 1;
switch (b) {
    case 1:
        console.log("Пики");
        break;
    case 2:
        console.log("Трефы");
        break;
    case 3:
        console.log("Бубны");
        break;
    default:
        console.log("Червы");
}
//  полное название мастиь и достоинство карты
let mast = 1;
let dos = 11
switch (mast) {
    case 1:
        maste = "Пики";
        break;
    case 2:
        maste = "Трефы";
        break;
    case 3:
        maste = "Бубны";
        break;
    default:
        maste = "Червы";
    
}
switch (dos){
    case 6:
        dose = "Шестерка";
        break;
    case 7:
        dose = "Семерка";
        break;
    case 8:
        dose = "Восьмерка";
        break;
    case 9:
        dose = "Девятка";
        break;
    case 10:
        dose = "Десятка";
        break;
    case 11:
        dose = "Валет";
        break;
    case 12:
        dose = "Дама";
        break;
    case 13:
        dose = "Король";
        break;
    case 14:
        dose = "Туз";
        break;          
}
console.log(dose, maste);