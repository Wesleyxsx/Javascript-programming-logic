// Date

const date1 = new Date();
console.log(date1)
const date2 = new Date('March 06 2019 9:30'); 
const date3 = new Date(2019,03,06,9,30); // mês começa a contar do zero
date3.setFullYear(2030);
date2.toDateString();
date2.toTimeString();
