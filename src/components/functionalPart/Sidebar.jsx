import React from 'react'
import SidebarListItem from './SidebarListItem'
import algoListData from '../../data/algo-list-data'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    const sidebar_list = algoListData.map((algoItem, index) => {
        return (
            <SidebarListItem algoData = {algoItem} key={index}/>
        )
    })
  return (
    <div className='sidebar'>
        <div className='sidebar-heading'>
            <lord-icon
                src="https://cdn.lordicon.com/rwotyanb.json"
                trigger="morph"
                colors="primary:#121331,secondary:#08a88a"
                style={{height : "80px", width : "80px"}}>
            </lord-icon>
            <Link to="/" className='Link'>Algorithm Visualizer</Link>
        </div>
        <div className="sidebar-algorithm-list">
                {sidebar_list}
        </div>
    </div>
  )
}
