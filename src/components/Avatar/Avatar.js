import React from "react";
import avatar from "../../images/Avatar.png";
import "./Avatar.css";

const Avatar = ({ src, alt }) => {
    //if the image wasn't load then this function shows the default image
  const handleOnEror =(e)=>{
      e.target.src={src};
  }
  return (
      <div>
          {src ? 
          <img className="avatarlogo" src={src} alt={alt} onError={handleOnEror}></img> 
          : 
          <img className="avatarlogo" src={avatar} alt={alt}></img>}
      </div>
    
  );
};
//src attribute should pass from <Avatar src="  "/> 

export default Avatar;