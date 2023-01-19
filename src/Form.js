import React, { useEffect, useState } from 'react'

export default function Form() {
    const data = {name:"",email:"",password:""}
    const [inputData,setInputData] = useState(data);
    const [flag,setFlag] = useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])

    function handledata(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password)
        {
            alert("All fileds manditory")
        }
        else{
            setFlag(true);
        }
    }
  return (
      <>
      <prev>{(flag?<h2 className='ui-define'>Hello{inputData.name},You have Registered</h2>:"")}</prev>
       <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registartion Form</h1>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handledata}></input>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handledata}></input>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handledata}></input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

    </form>
      </>
   
  )
}
