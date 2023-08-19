let btn=document.getElementById('serch')
let display=document.getElementById('display')
let input=document.getElementById('input')

let weather=()=>{
  let p=fetch(`https://goweather.herokuapp.com/weather/${input.value}`);
  p.then((value1)=>{
    return value1.json()
  }).then((data)=>{
    console.log(data)

    let weatherReport=`temperature:${data.temperature}\n`
     weatherReport +=`wind:${data.wind}\n`
     weatherReport +=`discription:${data.description}\n`
     weatherReport +=`forecast:${JSON.stringify(data.forecast)}\n`
    display.innerHTML=weatherReport;
  }).catch((error)=>{
    console.log("error"+error)
  })
}

btn.addEventListener('click',weather);