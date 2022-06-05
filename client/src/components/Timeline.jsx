import './timeline.css'
import { IconButton, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '../axios'
import { format } from 'timeago.js';
const Timeline = () => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    async function fetchData() {
        const req = await axios.get('/send')

        setMessages(req.data);
    }
    fetchData();
  }, [])
console.log(messages)
  return (
    <>
      <div className='container'>
        <h2 className='timeline'>Timeline</h2>
        <div className='sidebarChat'>
          <div className="sidebarChat_info">
         
          {messages.map((item,index)=>(
             <div>
            <Avatar />
            <h2 className='nametimeline' key={index}>{item.to} {item.to == +919496323611 ? "Amal Sabu" : "Admin"} </h2>
            <p key={index}>{item.body}</p>
            <p key={index}>{item.date}</p>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </>


  )
}

export default Timeline