import React from 'react'

export default function About() {
  return (
    <div className='aboutSection' id='toAbout'>
      <div className="aboutSection-leftPart">
        <div className="aboutSection-leftPart-heading">
            A New Way to learn <span id='specialText'>Algorithms</span> starts here
        </div>

        <div className="aboutSection-leftPart-description">
            <div className="desc-part-1">
                Stop wasting time on various explanations and codes to learn the various important Algorithms. Get all in <span style={{textDecoration:"underline",fontWeight:"600"}}>ONE</span> place.
            </div>
            <ul className="descPoints">
                <li className='descPointItem'>Get Visualization of hard to understand algorithms</li>

                <li className='descPointItem'>Know the steps taken in our Console to better understand the flow of code</li>

                <li className='descPointItem'>
                    Get the most Optimal Code in languages such as C++ and Python.
                </li>

                <li className='descPointItem'>
                    Get references to some of the best documentations/viodeos available.
                </li>

            </ul>
        </div>
      </div>
      <div className="aboutSection-rightPart">
        <img src="https://img.freepik.com/free-vector/business-team-planning-working-process-flat-vector-illustration-cartoon-colleagues-talking-sharing-thoughts-smiling-company-office-teamwork-workflow-concept_74855-9813.jpg?w=826&t=st=1662815914~exp=1662816514~hmac=4ee5862b0714a5e1281e9e26c05fad5e5697791b99d89f155832387210d2976f" alt="About right part" />
      </div>
      
      {/* https://img.freepik.com/free-vector/business-team-planning-working-process-flat-vector-illustration-cartoon-colleagues-talking-sharing-thoughts-smiling-company-office-teamwork-workflow-concept_74855-9813.jpg?w=826&t=st=1662815914~exp=1662816514~hmac=4ee5862b0714a5e1281e9e26c05fad5e5697791b99d89f155832387210d2976f */}
    </div>
  )
}
