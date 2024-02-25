// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

// Second Method (Anonymous Function)

for(let i = 0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let buttoninnerHTML = this.innerHTML;
        soundPlay(buttoninnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    soundPlay(event.key);
});

function soundPlay(key){


    switch(key) {
        case "w":
            let audio = new Audio("sounds/tom-1.mp3");
            // Here 'Audio' is the name of the constructor function with file location and having the content of play as function.
            audio.play();
        break;

        case "a":
            let audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
        break;

        case "s":
            let audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
        break;

        case "d":
            let audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play();
        break;

        case "j":
            let audio4 = new Audio("sounds/crash.mp3");
            audio4.play();
        break;

        case "k":
            let audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
        break;

        case "l":
            let audio6 = new Audio("sounds/snare.mp3");
            audio6.play();
        break;

        default:
            console.log(buttoninnerHTML);
    }
    // this.style.color = "white";

    // "this" will specify the clicking button and the clicking button changes its original color to white thorugh this
    //This happened when click on the button takes place.
}
