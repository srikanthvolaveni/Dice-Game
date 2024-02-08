import React from 'react'
import "./Die.css"
const Die = ({face,rolling}) => {
  return (
    <i className={`dice fas fa-dice-${face}  ${rolling && "shaking"}`}/>
  )
}

export default Die