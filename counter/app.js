let counterUpdate = document.getElementById("counterUpdate");
let increaseBtn = document.getElementById("Increase");
let DecreseBtn = document.getElementById("Decrese");
let resetBtn = document.getElementById("reset");
let count = 0;

let counterIncrease = () => {
  count++;
  counterUpdate.textContent = count;
  color();
};
let counterDecrese = () => {
  count--;
  counterUpdate.textContent = count;
  color();
};
let counterreset = () => {
  count = 0;
  counterUpdate.textContent = count;
  color();
};
let color = () => {
  if (count > 0) {
    counterUpdate.style.color = "green";
  }else if(count<0){
           counterUpdate.style.color="red"
        }else{
            counterUpdate.style.color="black"
        }
};
increaseBtn.addEventListener("click", counterIncrease);
DecreseBtn.addEventListener("click", counterDecrese);
resetBtn.addEventListener("click", counterreset);
