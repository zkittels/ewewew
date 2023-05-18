let projectName = prompt("Как называется ваш проект?");
let screenTypes = prompt("Какие типы экранов нужно разработать?");
let projectCost = Number(prompt("Сколько будет стоить данная работа?"));
let additionalService = prompt("Какой дополнительный тип услуги нужен?");
let additionalCost = Number(prompt("Сколько это будет стоить?"));

let counter = 1; // начальное значение счётчика
// если пользователь ввёл дополнительный тип услуги
if (additionalService) {
  let serviceKey = additionalService + counter; // формируем уникальный ключ
  while (appData.services.hasOwnProperty(serviceKey)) { // проверяем, не занят ли ключ
    counter++; // если занят, увеличиваем счётчик и формируем новый ключ
    serviceKey = additionalService + counter;
  }
  appData.services[serviceKey] = additionalServicePrice; // сохраняем ответ в объекте appData.services
}

let screenPrice = Object.values(appData.screens).reduce((total, price) => total + price, 0);
