// Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.

let userCard = prompt("Введите 16-значный номер Вашей кредитной карты");
alert("Номер вашей карты: ************" + userCard.slice(12,16));
