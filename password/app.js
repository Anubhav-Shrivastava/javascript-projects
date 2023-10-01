document.getElementById("passwordForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  let pass = document.getElementById("password").value;
  let message=document.getElementById("info")
  let specialChars = "!@#$%^&*(?/";
  let hasSpecialChar = false;

//  the code below checks for specialChars password is incude or note if its included its change the value of hasSpecialChar to tuue
  for (let char of specialChars) {
      if (pass.includes(char)) {
          hasSpecialChar = true;
          break;
      }
  }
  // if the value of hasSpecialChar is ture then the following code is executed


  if (hasSpecialChar) {
    message.innerHTML=`password contain one of the following ${specialChars}`
    message.style.color="green";
  } else {
    message.innerHTML=`please use one of the folloeing ${specialChars}`
    message.style.color="red"
  }
});