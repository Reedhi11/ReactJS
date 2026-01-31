import React from 'react'

const Card1 = (props) => {

  return (

      <div className="card">
        <img src={props.img} alt="profile pic" />
        <h1>{props.user}</h1>
        <h2>{props.age} years old</h2>
        <div className="member-info">
          <p><strong>Role:</strong> {props.role}</p>
          <p><strong>Experience:</strong> {props.experience}</p>
          <p><strong>Skills:</strong> {props.skills.join(', ')}</p>
          <p><strong>Bio:</strong> {props.bio}</p>
          <p><strong>Location:</strong> {props.location}</p>
        </div>
        <button>Contact {props.user.split(' ')[0]}</button>
      </div>

  )
}

export default Card1