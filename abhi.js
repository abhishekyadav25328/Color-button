const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === "box1"){
            body.style.backgroundColor= "red";
        }
        if(e.target.id === "box2"){
            body.style.backgroundColor= "rgb(97, 169, 10)";
        }
        if(e.target.id === "box3"){
            body.style.backgroundColor= "rgb(134, 124, 124)";
        }
        if(e.target.id === "box4"){
            body.style.backgroundColor= "blue";
        }
        if(e.target.id === "box5"){
            body.style.backgroundColor= "orange";
        }
    });
});
function color(){
    document.getElementsByTagName("body").style.backgroundColor="darkmagenta"

}
