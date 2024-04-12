 let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dice${randomNum1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNum2}.png`);

let header = document.querySelector("h1");

if (randomNum1 > randomNum2) {
    header.innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNum1 < randomNum2) {
    header.innerHTML = "Player 2 Wins! 🚩";
}
else {
    header.innerHTML = "Draw!";
}