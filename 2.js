// проверить отрицаткльное ли число
let d =123;
if (d>0){
    console.log("Это число неотрицательное");
} else console.log("Это чило отрицательное");

// длина этой строки
let str = "дадад";
console.log(str.length);
// ввести последний символ строки 
let a = "дедушка";
console.log(a[a.length -1]);
//число четное или нет 
let v = 22;
if (v % 2 == 0){
    console.log("это число четное")
}else console.log("это число нечетное")
// первые буквы этих совпадают 
let qw = "qwas";
let as = "qwas";
if (qw[0]==as[0]){
    console.log("первые буквы совпадают")
}
// сумма первой и последней цифры этого числа 
u_1 = 734;
x = String(u_1);
x = x[0];
x = Number(x);
console.log(x+u_1%10)
// сумма цифр в этом числе 
var oiu = 345;
var sum = 0;
while ( oiu > 0) {
    sum += oiu % 10
    oiu = Math.floor(oiu/10)
}
console.log(sum)