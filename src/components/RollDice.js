import React, { useState } from 'react'
import Die from './Die'
import "./RollDice.css"

const RollDice = ({sides}) => {
    const [data,setData] = useState({
        dice1:'one',
        dice2:'three',
        rolling:false,
        totalScore:4,
        
    })
    const {dice1,dice2,totalScore,rolling} = data

    const roll = () =>{
        const newDice1 = sides[Math.floor(Math.random() * sides.length)]
        const newDice2 = sides[Math.floor(Math.random() * sides.length)]
        const score1 = Object.values(newDice1) //[2]
        const score2 = Object.values(newDice2) //[3]

        setData({
            dice1:Object.keys(newDice1), //["two"]
            dice2:Object.keys(newDice2), // ["three"]
            rolling:true,
            totalScore:score1[0] + score2[0],
        })
        
        setTimeout(()=>{
            setData((prev) => ({...prev,rolling:false}))
        },1000)
    };


  return (
    <>
    <div >
        <div>
            <Die face={String(dice1)} rolling={rolling} /> 
            <Die face={String(dice2)} rolling={rolling} />
        </div>
        <button onClick={roll} disabled={rolling} className='roll-button'>{rolling ? "Rolling..." : "Roll Dice"}</button>
        <p className='score'>Total Score: {totalScore}</p>
    </div>
    
    </>
  )
}

RollDice.defaultProps = {
    sides:[
        {one : 1},
        {two : 2},
        {three : 3},
        {four : 4},
        {five : 5},
        {six : 6},
    ]
}

export default RollDice