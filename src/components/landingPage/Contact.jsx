import React from 'react'

export default function Contact() {
  return (
    <div id='toContact' className='contactSection'>
      <div className="contactHeader">

        <div className="contactHeading">
            Get in touch
        </div>
        
        <div className="contactSubHeading">
            Have a doubt or a suggestion. We will be more than happy to solve it.
        </div>

      </div>

      <div className="contactForm">
        <form action="post" className='contactForm-LeftPart'>
            <input type="text" name="fullName" id="fullName" placeholder='Name'/>

            <input type="email" name="email" id="email" placeholder='Email' />

            <input type="number" name="phoneNumber" id="phoneNumber" placeholder='Contact Number' />

            <input type="text" name='msgSubject' id='msgSubject' placeholder='Subject'
            />

            <textarea name="msg" id="msg" cols="57" rows="10" placeholder='Message'></textarea>
        </form>
        <div className="contactForm-RightPart"></div>
      </div>
    </div>
  )
}
