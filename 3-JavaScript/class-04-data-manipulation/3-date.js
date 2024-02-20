const dateNowMillisec = new Date().getTime();
const dateNow = new Date();

console.log(dateNowMillisec);
console.log(dateNow.toLocaleString("pt-br"));
console.log(dateNow.toLocaleDateString("pt-br"));
console.log(dateNow.toLocaleTimeString("pt-br"));

console.log(dateNow.getDay());
console.log(dateNow.getDate());
console.log(dateNow.getMonth());
console.log(dateNow.getFullYear());

dateNow.setDate(dateNow.getDate()+30);
dateNow.setDate(dateNow.getMonth()+12);
dateNow.setDate(dateNow.getFullYear()+12);

console.log(dateNow.toLocaleDateString("pt-br"));

console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMilliseconds());

console.log(dateNow.toLocaleTimeString("pt-br") + ":" + dateNow.getMilliseconds());
console.log(dateNow);

console.log(
    dateNow.toLocaleDateString("pt-BR",{
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric", 
    })
);

const date1 = new Date("2023-12-27")
const date2 = new Date("2023-09-25")
console.log((date1 - date2) );
