let c = document.getElementById("expanceHeading");
function counter() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        c.innerHTML =i;
    }, i * 1000);
  } 
 
}
counter()
