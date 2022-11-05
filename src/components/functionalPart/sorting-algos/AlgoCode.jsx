import React from 'react'

export default function AlgoCode(props) {
  return (
    <div className="algoCode">
        <div className="algoCode-heading">
            Code for {props.sortChoices[props.sortingMethod].name} Sort
        </div>

        <div className="languageChoices">
            <div className="language1">C++</div>
            <div className="language2">Python</div>
        </div>

        <div className="actualCode">
            <code>
                
            </code>
        </div>
    </div>
  )
}
