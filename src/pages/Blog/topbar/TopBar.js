import "./topbar.css"
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    
    <div className='top'>
      <div className="topLeft"></div>

      <div className="topCenter">
        <ul className="topList">

          <li className="topListItem">
          <Link to="Blogs/" className="nav-link">Blogs</Link>
          </li>

          <li className="topListItem">
          <Link to="write/" className="nav-link">Write Blogs</Link>
          </li>
          
          <li className="topListItem">
          <Link to="myblogs/" className="nav-link">My Blogs</Link>
          </li>
        </ul>
      </div>
      
      <div className="topRight">
        {/* <img className="topImg"
        src="https://images.statusfacebook.com/profile_pictures/school_girls/school_girl_images_20.jpg" 
        alt=""/> */}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>




  )
}
