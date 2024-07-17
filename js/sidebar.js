let showBtn = document.getElementById("show");
let closeBtn  = document.getElementById("close");
let sidebar = document.querySelectorAll(".sidebar-list");



function toggleBtn(){
    sidebar.forEach(function(item){
        let span = item.querySelector("span");
          if(span){
            span.style.display = span.style.display === "flex" ? "none" : "flex"
          
        
          }
          
})

}

showBtn.addEventListener("click", function(){

    toggleBtn();
    showBtn.style.display = "none";
    closeBtn.style.display = "inline"
});

closeBtn.addEventListener("click", function(){
toggleBtn();
showBtn.style.display = "inline";
closeBtn.style.display = "none";

});




