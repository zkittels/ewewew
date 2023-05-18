function getAllServicePrices(services) {
    var prices = {};
    for (var service in services) {
      var price = prompt("Сколько это будет стоить: " + service);
      if (!isNaN(parseFloat(price))) {
        prices[service] = parseFloat(price);
      } else {
        console.log("Некорректное значение. Введите число.");
      }
    }
    return prices;
  }

let userInput = prompt("Введите число:");

  if (userInput !== null) {
    userInput = parseFloat(userInput.trim());
    
    if (!isNaN(userInput)) {
      console.log(userInput);
    } else {
      console.log("Вы ввели не число");
    }
  } else {
    console.log("Вы отменили ввод");
}

let arr = ['2234', '5678', '2314', '4987', '9432', '4178', '2834'];
for (let i = 0; i < arr.length; i++) 
if (arr[i][0] === '2' || arr[i][0] === '4') 
console.log(arr[i]);

for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let factor = 2; factor < num; factor++) {
  if (num % factor === 0) {
  isPrime = false;
  break;
  }
  }
  if (isPrime) {
  console.log(num + ' - Делители этого числа: 1 и ' + num);
  }
}
