// Второй вариант решения.
// Вынести функцию из метода setTimeout, дать функции название и обратиться к ней в методе
const arr1 = [10, 12, 15, 21];

function tz18() {
    for (var i = 0; i < arr1.length; i++) {
        console.log('Index: ' + i + ', element: ' + arr1[i]);
    }
}

setTimeout(tz18, 3000);