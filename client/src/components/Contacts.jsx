import './contacts.css'
import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from '../axios'
import { Link } from 'react-router-dom';

const Contacts = () => {
    const [people, setPeople] = useState([])
//API CALL FOR GETTING ALL USERS
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/users/allusers')

            setPeople(req.data);
        }
        fetchData();
    }, [])


    return (
        <>
            <div className='container'>
                <h2 className='contacts'>Contacts</h2>
                <div className='sidebarChat'>

                    <ul className='list'>

                        {people.map((p) => (

                            <div className="sidebarChat_info">
                                <br />
                                <li className='listcontact'>

                                    <Link to={`/details/${p._id}`} style={{ textDecoration: "none" }}>
                                        <Avatar className='avater' />
                                        <h2 className='name' >{p.fname} {p.lname}</h2>
                                    </Link>
                                </li>
                            </div>

                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}


export default Contacts