import React from 'react'
import { Link } from 'react-router-dom'

export default function CodeEditorNavbar() {
  return (
    <div className='codeEditor-navbar-container'>
      <div className="codeEditor-navbar-heading">
        Code Editor
      </div>
      <div className="codeEditor-navbar-links">
        <Link to = "/" className="codeEditor-navbar-link-item">Home</Link>
        <Link to = "/algos" className="codeEditor-navbar-link-item">Algorithm Visualizer</Link>
      </div>
    </div>
  )
}
