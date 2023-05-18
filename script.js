'use script';

let title = prompt('Как называется ваш проект?')
console.log(title)

let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")
console.log(screens)

let screenPrice = prompt('Сколько будет стоить данная работа?', "12000")
console.log(screenPrice)

let adaptive = prompt('Нужен ли адаптив на сайте?', "true/false")
console.log(adaptive)

let service1 = prompt('Какой дополнительный тип услуги нужен?')
console.log(service1)

let servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1)

let service2 = prompt('Какой дополнительный тип услуги нужен?')
console.log(service2)

let servicePrice2 = prompt('Сколько это будет стоить?')
console.log(servicePrice2)

let fullprice = screenPrice + servicePrice1 + servicePrice2
