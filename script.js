function getCurrentDateTime() {
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const date = new Date();
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `Сегодня ${dayOfWeek}, ${dayOfMonth} ${month} ${year} года, ${hour} час ${minute} минут ${second} секунды`;
}
function getCurrentDateTimeFormatted() {
  const date = new Date();
  const dayOfMonth = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hour = addLeadingZero(date.getHours());
  const minute = addLeadingZero(date.getMinutes());
  const second = addLeadingZero(date.getSeconds());
  return `${dayOfMonth}.${month}.${year} - ${hour}:${minute}:${second}`;
}
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

setInterval(() => {
  const dateTimeA = getCurrentDateTime();
  const dateTimeB = getCurrentDateTimeFormatted();
  // do something with dateTimeA and dateTimeB
}, 1000);
