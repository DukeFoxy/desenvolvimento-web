const API = 
"https://api.github.com/users/PedroHenrique";

const userGithub = fetch(API)
 .then((res) => res.json())
 .then((data) => console.log(data))