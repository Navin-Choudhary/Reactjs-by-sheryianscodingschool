import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="card">
        <img src={props.img} ></img>
        <h1>{props.user},{props.age}</h1>
        <p>Shinzo wo Sasegayo!!!!</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card