import React from 'react'
import FormImage from './codeEditor-Images/JoinFormImg.png'
import {FaRegHandshake} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function JoinForm() {
  const navigate = useNavigate();

  const [roomId, setRoomId] = React.useState("");
  const [username, setUsername] = React.useState("");

  const generateNewRoom = () => {
    const id = uuidv4();
    setRoomId(id);
    toast("Room Created", 
    {
      icon:'✔',
      style:{
          borderRadius:'10px',
          backgroundColor:"black",
          color: "turquoise"
      }
    })
  }

  const validateEntry = () => {
    if(!username || !roomId) {
      toast("Room ID and Username are required", 
        {
          icon:'❌',
          style:{
              borderRadius:'10px',
              backgroundColor:"black",
              color: "turquoise"
          }
        })

        return;
    }

    navigate(`/code-editor/room/${roomId}`,
    {
      state: {
        username
      }
    });
  }

  const handleEnterKey = (event) => {
    if(event.code === 'Enter'){
      validateEntry();
    }
  }
  return (
    <div className='JoinForm'>
        <div className='codeEditor-joinForm-container'>
          <img src={FormImage} alt="Coding person" className='JoinFormImage' />
          <div className="codeEditor-joinForm">
            <div className="codeEditor-joinForm-heading">
              <FaRegHandshake className='codeEditor-icon'/> Code Merge
            </div>

            <div className="codeEditor-joinForm-subheading">
              Realtime collaboration
            </div>

            <input type="text"
            onChange={(e) => {setRoomId(e.target.value)}}
            className='codeEditor-joinForm-roomID'
            placeholder='Room ID'
            value={roomId}
            onKeyUp={handleEnterKey}
            />

            <input type="text"
            onChange={(e) => {setUsername(e.target.value)}}
            className='codeEditor-joinForm-username'
            placeholder='Username'
            value={username}
            onKeyUp={handleEnterKey}
            />
            <button className='codeEditor-joinForm-joinNow'
                    onClick={validateEntry}>Join Now</button>

            <div className="codeEditor-joinForm-createID" onClick={generateNewRoom}>
              Create New Room
            </div>
          </div>
        </div>
        <footer className='codeEditor-footer'>Made with 💜 by &nbsp; <a href="https://github.com/HarpratapsinhNakoom">Harpratapsinh Nakoom</a></footer>
    </div>
  )
}
