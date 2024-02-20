const appTitle = document.querySelector("#titleHome");
const paragraph = document.querySelectorAll(".paragraph");

appTitle.innerHTML = "JOJO's";
appTitle.style.color = "purple"

console.log(appTitle.innerHTML);

// paragraph[1].innerHTML = "Novo paragrafo";
// paragraph[0].style.fontSize = "64px";

paragraph.forEach((value) => {
    value.style.color = "red";
});

// console.log(paragraph);

const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const sumButton = document.querySelector(".sumButton")
const result = document.querySelector(".result")

function sumNumbers() {
    result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNumbers)

num1.addEventListener("keyup", () => {
    result.innerHTML = num1.value
});