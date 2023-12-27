fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    if(!res.ok){
        console.log('Problem');
        return;
    }
    return res.json();
})
.then(data => {
    for(let i =0; i< data.length; i++){
        // console.log(data[i].name)
        document.querySelector('ul').
        insertAdjacentHTML("afterend",`<li>${data[i].name}</li>`)
    }
})
