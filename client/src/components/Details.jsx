import './details.css'
import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '../axios'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams()


  const [details, setDetails] = useState([])
//API CALL FOR GETTING A USER
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/users/' + id)

      setDetails(req.data);
    }
    fetchData();
  }, [id])
  return (
    <>        <div className='containerDetails'>
      <div className='detailsWrapper'>

        <h1 className='contacts'>Contact Details</h1>
        <Avatar className='avatar' />
        <div className='details'>
          <p className='nam'>{details.fname} {details.lname}</p>
          <p className='nam'>{details.mobile}</p>
          <Link to={`/message/${details.mobile}`} style={{ textDecoration: "none" }}>

            <p><button>Send OTP</button></p>
          </Link>
        </div>



      </div>
    </div>
    </>
  )
}

export default Details