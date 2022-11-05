import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom'

export default function FunctionalPart() {
  return (
    <div className='functionalPart'>
        <Sidebar />
        <Outlet />
    </div>
  )
}
