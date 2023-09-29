let addBtn = document.getElementById("addBtn")
display();

addBtn.addEventListener("click", (e) => {
  let inputText = document.getElementById("textArea");
  let notes = localStorage.getItem("notes");
  let notesObj;
  if(inputText.value == ""){
    alert("enter your note")
  }else{
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(inputText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  inputText.value = "";
  console.log(notesObj);
  display();
}
});

function display(){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let notesOutput = "";
  notesObj.forEach(function (element,index) {
    notesOutput += `
    <div class="card my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
          <h5>${index + 1}</h5>
          <p class="card-text">${element}.</p>
          <hr>
          <button id="${index}" onclick="dltNote(this.id)" class="dltBtn" style="
          border-radius: 8px;
          border: none;
          background-color: aqua;
          padding: 8px;
        ">Delete</button>
        </div>
      </div>`;
  });
  let notesElm = document.getElementById("notesOutput");
  if(notesObj.length != 0){
    notesElm.innerHTML= notesOutput; 
  }else{
    notesElm.innerHTML="dont have any thing to show"
  }
  
};

let dltNote=(index)=>{
    console.log("i am deleting note of index " +index);
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  display()
}

// search feature

search =document.getElementById("searchTxt")
search.addEventListener("input",()=>{
  let searchVal=search.value.toLowerCase();
  // console.log(searchVal)
  let noteCards=document.querySelectorAll(".card")
  noteCards.forEach((element)=>{
        let noteTxt=element.getElementsByTagName("p")[0].innerText;
        if(noteTxt.includes(searchVal)){
          element.style.display="block"
        }else{
          element.style.display="none"
        }
  })
})


