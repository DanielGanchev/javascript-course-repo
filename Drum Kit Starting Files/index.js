let buttonWithClass = document.querySelector('.w');
let buttonWithClass2 = document.querySelector('.a');
let buttonWithClass3 = document.querySelector('.s');
let buttonWithClass4 = document.querySelector('.d');
let buttonWithClass5 = document.querySelector('.j');
let buttonWithClass6 = document.querySelector('.k');
let buttonWithClass7 = document.querySelector('.l');

let audio = new Audio('sounds/tom-1.mp3');
let audio2 = new Audio('sounds/tom-2.mp3');
let audio3 = new Audio('sounds/tom-3.mp3');
let audio4 = new Audio('sounds/tom-4.mp3');
let audio5 = new Audio('sounds/snare.mp3');
let audio6 = new Audio('sounds/crash.mp3');
let audio7 = new Audio('sounds/kick-bass.mp3');

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    
        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
            var buttonInnerHTML = this.innerHTML;
    
            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
    

     
        });
    
    }




document.addEventListener('keydown', function(event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
}); 

function makeSound(key) {
                switch (key) {
                    case "w":
                        audio.play();
                        break;
                    case "a":
                        audio2.play();
                        break;
                    case "s":
                        audio3.play();
                        break;
                    case "d":
                        audio4.play();
                        break;
                    case "j":
                        audio5.play();
                        break;
                    case "k":
                        audio6.play();
                        break;
                    case "l":
                        audio7.play();
                        break;
                    default:
                        console.log(buttonInnerHTML);
                }
            }

function buttonAnimation(buttonWithClass){
    var activeButton = document.querySelector("." + buttonWithClass);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}          