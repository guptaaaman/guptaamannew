import axios from 'axios'
import React,{useState} from 'react';


function Appj() {
  const[post,setpost]=useState([])
  function getdata() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      console.log(response.data);
      setpost(response.data)
    }).catch((error)=>{
      console.log(error)
    })
    
  }
  const titles=post.map((posts)=>{
    return(
      <div>
        <p>{posts.id}</p>
        <h1>{posts.title}</h1>
        <h1>{posts.body}</h1>
        <h2>{post.userid}</h2>
        
      </div>
    )
  })
  return (
    <div className="App">
      <button onClick={getdata}>getdata</button>
      {titles}
    </div>
  );
}

export default Appj;