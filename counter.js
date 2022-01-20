let number = 1;

let button = document.getElementsByTagName("button")[0];
let button2 = document.getElementById("button2");
document.getElementById("number").innerText = number;

button.onclick = count;

function count() {
    number++;
    document.getElementById("number").innerText = number;

}

console.log(button);
console.log(button2);
