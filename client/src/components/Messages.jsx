import './messages.css'
import { useParams } from "react-router-dom";
import axios from '../axios'
import {  useState } from 'react';

const Messages = () => {

    const [data, setData] = useState("")
    const [msg, setMsg] = useState("")
    console.log(data)


console.log(data.success)
  const handleClick = async () => {
    try {
        const res = await axios.post(`/send?recipient=${num}&textmessage=Hi. Your OTP is  : ${otp}`)
        setData(res.data)
    }catch(err){

    }
  }

  console.log(data)
    const {num}  = useParams();

    let otp = Math.floor(100000 + Math.random() * 900000)
    return (
        <>
            <div className='container'>
                <div className="chatBoxBottom">
                    <textarea
                        className="chatMessageInput"
                        placeholder="write something..."
                        defaultValue={"Hi. Your OTP is  :  " + otp}
                    ></textarea>
                   
                </div>
                <button className="chatSubmitButton" onClick={handleClick}>
                        Send
                    </button>
              { data &&  <p>OTP has been sent {data.success ? "successfully !" : "failed !"} </p> }
            </div>
        </>
    )
}

export default Messages