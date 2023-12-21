const btnEl = document.querySelector(".btn");

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => {
    for(i=0;i < data.length; i++)
    console.log(data[i].username)
});
const userInfoDiv = document.getElementById('class').value = class{

}


// .then((data) => console.log(data[2].username)); 
// .then((data) => console.log(data[3].username)); 
// .then((data) => console.log(data[4].username)); 
// .then((data) => console.log(data[5].username)); 
// .then((data) => console.log(data[6].username)); 