import React from "react";
import axios from 'axios'
import { useEffect, useState } from "react";
import './user.css'
import { useNavigate } from "react-router";

export function User(props) {
    console.log(props.data)
    const [posts, setPosts] = useState([])
const[title,setTitle]=useState("")
const[body,setBody]=useState("")
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data))
            .then((json) => console.log(json));
    }, [])

    const Add=()=>{
      axios.post('https://jsonplaceholder.typicode.com/posts', 
   JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then((response) => response.json())
  .then((json) => console.log(json)))
    }
    const Edite=(id)=>{
        useEffect(()=>{
        axios.put('https://jsonplaceholder.typicode.com/posts/'+id,
  {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }).then((response) => response.json())
  .then((json) => console.log(json))
})   
} 
const Delete=()=>{
    useEffect(()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
})
}
const navigat=useNavigate()
function LogOut(){
    navigat('/')
}

    console.log(posts)
    return (<div className="mid">
    <div className="us"  >  
      <h1>Welcome To Your Acount</h1> <button className="btn" onClick={LogOut}>Log Out</button> </div><br></br>
      <div className="mid"> <label>Add Title:</label><input value={title} onChange={e=>(setTitle(e.target.value))}></input>
     <br></br> <label>Add Body:</label><textarea value={body} onChange={e=>(setBody(e.target.value))}></textarea><br></br><button className="mid" onClick={Add}>Add pposts</button>
      </div>
     <div>  {
            posts.map((post) => {
                return (<div className="post">
                    <h2>Title</h2><h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button className="Edt" onClick={event=>Edite(post.id)} >Edite </button><button className="btnn" onClick={Delete}>Delete</button>
                </div>)
            })
        }</div>

    </div>)
}