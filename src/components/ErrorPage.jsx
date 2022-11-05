import React from 'react'
import {Link} from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='error-404'>
        <div className="error404-topPart">
            404
        </div>
        <div className="error404-bottomPart">
            The page you are looking for isn't avaiable with us.
            <Link className='Link' to="/">Go Back</Link>
        </div>
    </div>
  )
}
