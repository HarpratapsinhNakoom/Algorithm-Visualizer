import React from 'react'

export default function AlgoHeader(props) {

  const sortAvailable = props.sortFunction.map((ele, index) => {
    return (
      <div key={index} className='sortChoice' id={`${ele.name}`} onClick={props.setMethod}>{ele.name} Sort</div>
    );
  })
  return (
    <div>
      <div className="sortAlgo-header">
            <div className="sortAlgo-heading">Visualize Sorting</div>
            <div className="array-functions">
                <div className="sortFunctionChoices">
                  {sortAvailable}
                </div>
                <div className="array-functions-p1">
                  <div className="generate-new-array" onClick={() => {props.changeArray(props.arrayLength)}}>
                      Generate New Array
                  </div>
                  <div className="sort-array"
                  onClick={props.sortFunction[props.sortingMethod].function}>Sort</div>
                </div>

                <div className="array-functions-p2">
                  <div className="lengthControls">
                    <label htmlFor="lengthSlider">Change Array Length</label>
                    <input type="range"
                          name="lengthSlider"
                          id="lengthSlider"
                          className='lengthSlider'
                          min="5"
                          max="200"
                          onChange={props.handleLength}/>
                  </div>

                  <div className="speedControls">
                    <label htmlFor="timeSlider">Change Speed</label>
                    <input type="range"
                          name="timeSlider"
                          id="timeSlider"
                          className='timeSlider'
                          min={1}
                          max={5}
                          onChange={props.handleSpeed}/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
