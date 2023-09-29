const aboutClick = document.getElementById("home-click");
const skillClick = document.getElementById("skill-click");
const resumeClick = document.getElementById("resume-click");
const contactClick = document.getElementById("contact-click");
let sideBarToggleBtn=document.getElementById("sideBar-Btn")

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const resume = document.getElementById("resume");
const contact = document.getElementById("contact");

// Initially, display the "Home" section and hide the "other" section
about.style.display = "block";
aboutClick.style.color = "orange";
skills.style.display = "none";
resume.style.display = "none";
contact.style.display = "none";

//Function to set the active button color to ornage
function setActiveButton(activeButton) {
    const buttons = [aboutClick, skillClick, resumeClick, contactClick];

    buttons.forEach(button => {
        if (button === activeButton) {
            button.style.color = "orange";
        } else {
            button.style.color = "white";
        }
    });
}

//Function to set display property
function setDisplayProperties(activeButto, section) {
    const sections = [about, skills, resume, contact];

    sections.forEach(sec => {
        if (sec === section) {
            sec.style.display = "block";
        } else {
            sec.style.display = "none";
        }
    });
}

// Add click event listeners to the buttons
aboutClick.addEventListener("click", () => {
    setDisplayProperties(aboutClick,about)
  setActiveButton(aboutClick)
});

skillClick.addEventListener("click", () => { 
    setDisplayProperties(skillClick,skills) 
  setActiveButton(skillClick)

});
resumeClick.addEventListener("click", () => {
    setDisplayProperties(resumeClick,resume)
  setActiveButton(resumeClick)

});
contactClick.addEventListener("click", () => {
    setDisplayProperties(contactClick,contact)
  setActiveButton(contactClick)

});

sideBarToggleBtn.addEventListener('click',()=>{
    
    let sideBarInfo=document.getElementById('info')
    console.log(sideBarInfo)   
    sideBarInfo.classList.toggle('hide')
})