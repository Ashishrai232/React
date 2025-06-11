import React from 'react'

const Read = (props) => {
    console.log("Read");

    const users=props.users;
    const setUsers=props.setUsers;
    
    console.log(props);
    
    const up_user=users.map((user,idx)=>{
      return <li key={idx}>
          <span>{user.name} </span>
        </li>
      
    })
  return (
    <div>
        User Data 
        <ol>{up_user}</ol>
      
    </div>
  )
}

export default Read