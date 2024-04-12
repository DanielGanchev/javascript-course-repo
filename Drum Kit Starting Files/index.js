let audio = new Audio('sounds/tom-1.mp3');
let audio2 = new Audio('sounds/tom-2.mp3');
let audio3 = new Audio('sounds/tom-3.mp3');
let audio4 = new Audio('sounds/tom-4.mp3');
let audio5 = new Audio('sounds/snare.mp3');
let audio6 = new Audio('sounds/crash.mp3');
let audio7 = new Audio('sounds/kick-bass.mp3');

$(".drum").click(function() {
    let buttonInnerHTML = $(this).text();
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

$(document).keydown(function(event) {
    let key = event.key;
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
    let activeButton = $("." + buttonWithClass);
    activeButton.addClass("pressed");
    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100);
}