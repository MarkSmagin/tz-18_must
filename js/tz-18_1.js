// Первый вариант решения проблемы.
// Цикл должен быть внутри функции

const arr2 = [10, 12, 15, 21];
setTimeout(function() {
    for (var i = 0; i < arr2.length; i++) {
        console.log('Index: ' + i + ', element: ' + arr2[i]);
    }
}, 3000);
