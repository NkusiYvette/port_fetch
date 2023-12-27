const btnEl = document.querySelector(".btn");

const newUser = {
   name: 'Yvette',
   job: 'Developer'
};
const clickHandler = async()=>{
   try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users',
      {
         method: 'POST' ,
         headers: {
            'content-Type': 'application/json'
         },body: JSON.stringify(newUser)
      });
      const data = await res.json();
      console.log(data);
   }catch (error){
      console.log(error);
   }
};

btnEl.addEventListener("click",clickHandler);
const [posts, setPosts] = useState([]);

// btnEl.addEventListener('click',clickHandler);
// await fetch(`https://reqres.in/api/users`, {
//    method: 'POST',
//    headers: {
//       'Content-Type' : 'application/json'
//    },body: JSON.stringify(newUser)
// })
//  .then(res => {
//    if(!res.ok){
//       console.log('Problem Occured');
//       return;
//    }
//    return res.json()

//  })
// //  .then(res => res.json())


//  .then(data =>{
//     console.log("success");
//  })