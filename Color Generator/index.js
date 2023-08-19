let colorList=["red",'green',"yellow","rgba(156, 18, 210, 0.642)"]
let btn=document.getElementById("btn");
let colorName=document.querySelector(".color")


btn.addEventListener('click',()=>{
    let rand=randomNumber()
document.body.style.backgroundColor=colorList[rand];
colorName.textContent=colorList[rand]

})

let randomNumber=()=>{
    return Math.floor(Math.random()*colorList.length)
}