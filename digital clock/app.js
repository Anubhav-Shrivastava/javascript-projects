
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const day_year = document.getElementById('day_year');

setInterval(()=>{
  let now = new Date();

  let h=now.getHours();
  let m=now.getMinutes();
  let s=now.getSeconds();
  let date=now.getDate()
  let month=now.getMonth();
  let year=now.getFullYear();
  

   h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  let dayYear=`${date}/${month}/${year}`
  day_year.innerHTML=dayYear;
  hour.innerHTML=h;
  min.innerHTML=m;
  sec.innerHTML=s;
},1000)