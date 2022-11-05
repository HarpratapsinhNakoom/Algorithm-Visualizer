import React from 'react'
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/monokai.css'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'

export default function Editor() {
    React.useEffect(() => {
        CodeMirror.fromTextArea(document.getElementById('editorPage-codePart'), {
            mode:{ name:'javascript', json: true},
            theme : 'monokai',
            autoCloseTags : true,
            autoCloseBrackets : true,
            lineNumbers: true
        })
      }, []);
  return (
    <textarea id="editorPage-codePart"></textarea>
  )
}
