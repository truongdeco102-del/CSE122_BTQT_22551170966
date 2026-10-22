document.addEventListener('DOMContentLoaded',function(){
    const btnPrint = document.getElementById('btnPrint');

btnPrint.addEventListener('click',function(){
    const day = parseInt(document.getElementById('inputDay').value);
    const month = parseInt(document.getElementById('inputMonth').value);
    const year = parseInt(document.getElementById('inputYear').value);

const dataObj = new Date(year,month -1,day);

const dayOfWeek =[
    "chủ nhật",
    "thứ hai",
    "thứ ba",
    "thứ tư",
    "thứ năm",
    "thứ sáu",
    "thứ bảy"

];

const dayName = dayOfWeek[dataObj.getDay()];

document.getElementById('yearDisplay').textContent = year;
document.getElementById('monthDisplay').textContent = 'tháng' + month;
document.getElementById('dateDisplay').textContent = day;
document.getElementById('dayDisplay').textContent = dayName;

const currentHour = new Date().getHours();

let greeting = 'chào buổi tối';

if(currentHour >=4 && currentHour <12){
    greeting = 'chào buổi sáng'
}
else if(currentHour >=12 && currentHour <18){
    greeting = 'Chào buổi chiều'
}

document.getElementById('greetingDisplay').textContent = greeting;
});
});