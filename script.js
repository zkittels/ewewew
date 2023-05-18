const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const currentDate = new Date().getDay();
for (let i = 0; i < week.length; i++) {
  if (i === currentDate - 1) {
    document.write(`<b>${week[i]}</b><br>`);
  } else if (i === 5 || i === 6) {
    document.write(`<i>${week[i]}</i><br>`);
  } else {
    document.write(`${week[i]}<br>`);
  }
}
