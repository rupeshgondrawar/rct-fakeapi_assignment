import React from 'react'

function UserCard(props) {
    console.log(props);
  return (
    <div className='user-card'>
     <img className='user-img'/>
     <p>{props.data.name.first}</p>
     <h3>{props.data.phone}</h3>
     <p>{props.data.location.city},{props.data.location.state}</p>
    </div>
  )
}

export default UserCard;