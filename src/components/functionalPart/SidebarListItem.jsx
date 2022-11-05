import React from 'react'
import {Link} from 'react-router-dom'

export default function SidebarListItem(props) {

  return (
    <div className='sidebar-algorithm-list-item'>
        <div className='sidebar-algorithm-list-item-heading-container'>
            <Link to={props.algoData.groupLink} className='sidebar-algorithm-list-item-heading'>
                <p>{props.algoData.groupName}</p>
            </Link>
        </div>
    </div>
  )
}
