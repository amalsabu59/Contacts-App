import './navbar.css'
import { Link } from "react-router-dom"
const Navbar = () => {

  return (
    <nav>
      <div className="logo-container">
        <h2 className='logo'>LOGO</h2>
      </div>

      <div className='navContacts'>


        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="nav-menu"> Contacts</h2>

        </Link>

      </div>

      <div className='navTimeline'>
        <Link to="/timeline" style={{ textDecoration: "none" }}>
          <h2 className="nav-menu" >     Timeline
          </h2 >
        </Link>
      </div>

    </nav>
  )
}

export default Navbar

