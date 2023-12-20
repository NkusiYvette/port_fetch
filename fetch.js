fetch(`https://reqres.in/api/users`)
 .then(res => res.json())
 .then(data =>{
    console.log(data.data[0].first_name);
 }) 