import react from 'react'
import { useState,useEffect } from 'react'
import jwt_decode from "jwt-decode"
import {User} from './user'
import './Auth.css'
import { useNavigate } from 'react-router'

function Authentication(){
    const[name,setName]=useState("")
    const navigate = useNavigate()
    const google = window.google;
function handleCallbackResponse(response){
console.log("encoded jwt token"+response.credential)
var userObject=jwt_decode(response.credential);
console.log(userObject.given_name)
navigate("/user")
setName(userObject.given_name)
}

    useEffect(()=>{
google.accounts.id.initialize({
    client_id:"979038724559-u96r45qjsqfe3ia0c65pcpu52mvo0l66.apps.googleusercontent.com",
    callback:handleCallbackResponse
})
google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline",size:"large"}
)

    },[])

    return (
        <div className='App'>
            <h1>!...Welcome...!</h1>
<div className='mid' id="signInDiv">
</div></div>
    )

}

export default Authentication