import React from 'react'
import './PathFindingMain.css'

export default function PathFindingMain() {

  //displaying matrix with 50 rows and columns
  const showMatrix = [...Array(25)].map((ele, row) => {
    return(
        <div className='pathfinding-matrix-row' key={row}>
            {
              [...Array(50)].map((ele, col) => {
                return(
                  <div className="matrix-cell" id={`cell-${row}-${col}`} key={col}></div>
                );
              })
            }
        </div>
    );
  })
  return (
    <div className='pathfinding-container'>
        <div className="pathfinding-matrix">
            {showMatrix}
        </div>
    </div>
  )
}
