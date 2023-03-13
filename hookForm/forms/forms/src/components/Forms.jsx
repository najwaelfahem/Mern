// rafce
import React, {useState} from 'react'

let newUser = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""
}
const Forms = (props) => {
    // ! Every input must have a State variable
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [firstnameError, setFirstNameError] = useState(false)
    const [lastnameError, setLastNameError] = useState(false)
    const[emailError,setEmailError] = useState(false)
    const formHandler = (e)=>{
        e.preventDefault()
        console.log("Form Submitted 🧨🎇");
        newUser = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
        console.log(newUser);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    // Username Validation 
    const handlefirstname = (e)=>{
        e.preventDefault()
        setFirstName(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<3 ) { 
            console.log("Username must be more than 3 ");
            setFirstNameError(true)
        }
        else{
            setFirstNameError(false)
            console.log("Username is more than 3🎈 ");
        }
    }
    const handlelastname = (e)=>{
        e.preventDefault()
        setLastName(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<3 ) { 
            console.log("Username must be more than 3 ");
            setLastNameError(true)
        }
        else{
            setLastNameError(false)
            console.log("Username is more than 3🎈 ");
        }
    }
    const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<3 ) { 
            console.log("Username must be more than 3 ");
            setEmailError(true)
        }
        else{
            setEmailError(false)
            console.log("Username is more than 3🎈 ");
        }
    }
  return (
    <fieldset>
        {/* <legend>From.jsx</legend> 
        <p>firstname : {JSON.stringify(firstname)}</p> 
        <p>lastname : {JSON.stringify(lastname)}</p>
        <p>Email : {JSON.stringify(email)}</p>
        <p>Password : {JSON.stringify(password)}</p>
        <p>confirmPassword : {JSON.stringify(confirmPassword)}</p>
        <hr /> */}
        <form onSubmit={formHandler} >
            <div>
                <label >firstname : </label>
                <input onChange={(e)=>{handlefirstname(e)}} value={firstname} />
                {firstnameError ? <p style={{color:"red"}}>Username must be more than 3 </p>:null}
            </div>
            <br />
            <div>
                <label >lastname : </label>
                <input onChange={(e)=>{handlelastname(e)}} value={lastname} />
                {lastnameError ? <p style={{color:"red"}}>Username must be more than 3 </p>:null}
            </div>
            <br />
            <div>
                <label >Email : </label>
                <input onChange={(e)=>{handleEmail(e.target.value)}} value={email}/> 
                                 {/* Double binding */}
            </div>
            <br />
            <div>
                <label >Password : </label>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password}/> 
                 {/* Double binding */}
            </div>
            <br />
            <div>
                <label >confirmPassword : </label>
                <input onChange={(e)=>{setConfirmPassword(e.target.value)}} value={password}/> 
                 {/* Double binding */}
            </div>
            <br />
            <input type="submit" value="Create User" />
        </form>
       
    </fieldset>
  )
}

export default Forms