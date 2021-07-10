
/* alert toevoegen door te klikken*/

var clicked = document.querySelector (".btn-alert")

clicked.addEventListener("click", function(){
    alert("button was clicked");
});



/* class toevoegen door te klikken*/
var blue = document.querySelector (".blue-background")

// const makeRed =()=>{
//     blue.classList.add("red-background");
// };
// blue.addEventListener("click", makeRed);


/* toggle*/
const toggleColor =()=>{
    blue.classList.toggle("red-background");
};
blue.addEventListener("click", toggleColor);

