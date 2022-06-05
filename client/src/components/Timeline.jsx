import './timeline.css'
import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '../axios'

const Timeline = () => {

  const [messages, setMessages] = useState([])
//API CALL FOR GETTING SENT MESSAGE LOG
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/send')

      setMessages(req.data);
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='container'>
        <h2 className='timeline'>Timeline</h2>
        <div className='sidebarChat'>
          <div className="sidebarChat_info">

            {messages.map((item, index) => (
              <div>
                <Avatar />
                <h2 className='nametimeline' key={index}>{item.to} {item.to == +919496323611 ? "Amal Sabu" : "Admin A"} </h2>
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