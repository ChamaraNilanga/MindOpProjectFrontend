import React from 'react'
import { Link } from 'react-router-dom'
import Loginform from '../../components/login/loginform'
import BackgroundImage from '../../images/image01.jpg';

function Loginpage() {
  return (
    <header style={ HeaderStyle }>
    <div>
        <div>
          
        <Loginform />
        {/* <img src={b_img} alt="b_img" />; */}
        
        </div>
    </div>
    </header>
  )
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default Loginpage