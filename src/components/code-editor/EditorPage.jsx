import React from 'react'
import { FaRegHandshake } from 'react-icons/fa'
import Avatar from 'react-avatar';
import Editor from './Editor';

export default function EditorPage() {
  const [userList, setUserList] = React.useState([
    {name : "Harpratapsinh Nakoom", socketID : 1},
    {name : "Khushi Dalia", socketID : 2},
    {name : "Param Modi", socketID : 3},
    {name : "Dhairya Bhatt", socketID : 4},
    {name : "Khushi Desai", socketID : 5},
  ]);

  const showUsers = userList.map((user, index) => {
    return (
      <div className="editorPage-info-userItem" key={index}>
        <Avatar name={`${user.name}`} size="55" round={true}/>
        {user.name}
      </div>
    );
  })
  return (
    <div className='editorPage-container'>
        <div className="editorPage-info">
          <div>
            <div className="editorPage-info-heading">
            <FaRegHandshake className='codeEditor-icon'/>Code Merge
            </div>
            <div className="editorPage-info-users">{showUsers}</div>
          </div>
          <div className="editorPage-info-functionButtons">
            <button id='copyRoom'>Copy Room ID</button>
            <button id='leaveRoom'>Leave Room</button>
          </div>
        </div>
        <Editor />
    </div>
  )
}
