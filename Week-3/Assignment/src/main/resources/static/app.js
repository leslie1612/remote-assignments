const result = document.querySelector("#result");
const form = document.querySelector(".form")
let number = document.querySelector("input");

function sum(e) {
    e.preventDefault();

    const url = (number.value !== "") ? `http://localhost:3000/data?number=${number.value}` : 'http://localhost:3000/data';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            result.innerText = `結果為 : ${data}`;
        });

}

form.addEventListener("submit", sum);
