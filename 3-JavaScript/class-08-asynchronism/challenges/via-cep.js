const API = "https://viacep.com.br/ws/63580000/json/"

fetch(API)
    .then((res) => res.json())
    .then((data) => console.log(data));