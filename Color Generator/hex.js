let hex=[0,1,2,3,4,5,6,7,8,9,"A",'B','C','D','E','F']
let btn=document.getElementById("btn");
let colorName=document.querySelector(".color")


btn.addEventListener('click',()=>{

let hexColor="#"
for(let i=0;i<6;i++){
    hexColor += hex[randomNumber()]
}
document.body.style.backgroundColor=hexColor;
colorName.textContent=hexColor
})

let randomNumber=()=>{
    return Math.floor(Math.random()*hex.length)
}