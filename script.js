const getAllServicePrices = function() {
  let sum = 0;
  // код для подсчета суммы дополнительных услуг
  return sum;
    
 function getFullPrice(screenPrice) {
  const allServicePrices = getAllServicePrices();
  const fullPrice = screenPrice + allServicePrices;
  return fullPrice;
}

function getTitle(title) {
  return title.trim().replace(/\b\w/g, function(l) { return l.toUpperCase(); });
}
    const getServicePercentPrices = function() {
  const servicePrice = getFullPrice(screenPrice);
  const servicePercentPrice = servicePrice - (servicePrice * (rollbackPercent / 100));
  return servicePercentPrice;
}
    console.log(screens)
    console.clear();
showTypeOf(screenPrice);
showTypeOf(screens);
console.log(`Для разработки доступны экраны: ${screens}`);
console.log(getRollbackMessage(rollbackPercent));
console.log(`Стоимость за вычетом процента отката посреднику: ${getServicePercentPrices()}`);
