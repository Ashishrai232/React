import React, { useState } from 'react'


const Create = (props) => {
    console.log("Create");
    
    console.log(props);

    const users=props.users;
    const setUsers=props.setUsers;
    
    const [name, setname] = useState("")
    const [age, setage] = useState("")

    const submithandler=(e)=>{
        e.preventDefault();
        console.log("default rok diya");
      
        props.setusers([...users,{name,age}])
        setname("")
        setage("")
        // console.log(copy);
        
    }

  return (
    <div>
          <h1>register user</h1>
      <form onSubmit={submithandler}>
        <input value={name} type="text" placeholder='Fullname' onChange={(e)=>{
          setname(e.target.value)
        }} />
        <input  value={age} type="number" placeholder='age' onChange={(e)=>{
          setage(e.target.value)
        }}/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Create