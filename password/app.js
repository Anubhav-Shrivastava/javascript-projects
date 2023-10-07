let pass = document.getElementById("password");
let message=document.getElementById("info");

document.getElementById("passwordForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  let specialChars = "!@#$%^&*(?/";
  let hasSpecialChar = false;

//  the code below checks for specialChars password is incude or note if its included its change the value of hasSpecialChar to tuue
  for (let char of specialChars) {
      if (pass.value.includes(char)) {
          hasSpecialChar = true;
          break;
      }
  }
  // if the value of hasSpecialChar is ture then the following code is executed


  if (pass.value.length >= 4) {
    if (hasSpecialChar === true) {
      message.innerHTML = `Great! The password contains at least one of the following special characters: ${specialChars}`;
      message.style.color = "green";
    } else {
      message.innerHTML = `Please use one of the following special characters: ${specialChars}`;
      message.style.color = "red";
    }
  } else {
    message.innerHTML = "Password must be at least 4 characters long.";
    message.style.color = "red";
  }

});


let checkbox=document.getElementById("checkbox");
checkbox.addEventListener("click",()=>{
 // let pass = document.getElementById("password");
  let checkBoxLable=document.getElementById('checkBoxLable')
    if(checkbox.checked){
      pass.type="text"
      checkBoxLable.innerHTML="hide"
    }
    else{
      pass.type="password"
     
      checkBoxLable.innerHTML="show"
    }

})
  
