let toggleButtton = document.querySelector(".toggle-btn");
let sidebars = document.querySelector(".sidebar");
let pages = document.querySelector(".page");

isOn = true;
toggleButtton.addEventListener("click", function(){
 
    if(isOn){
        toggleButtton.classList.add("off");
       
        sidebars.style.backgroundColor = " rgb(118, 106, 106)"
        pages.style.backgroundColor = " rgb(118, 106, 106)"
        isOn = false;
    }
    else{
        toggleButtton.classList.remove("off");
        sidebars.style.backgroundColor = ""      
        pages.style.backgroundColor = ""
        isOn = true
    }

})