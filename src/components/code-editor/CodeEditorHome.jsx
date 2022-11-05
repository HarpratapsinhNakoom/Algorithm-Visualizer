import React from 'react'
import { Outlet } from 'react-router-dom'
import CodeEditorNavbar from './CodeEditorNavbar'
import './codeEditor.css'

export default function CodeEditorHome() {
    React.useEffect(() => {
        document.title = 'Code Editor';
    }, []);
  return (
    <div className='CodeEditor-container'>
      <CodeEditorNavbar />
      <Outlet />
    </div>
  )
}
