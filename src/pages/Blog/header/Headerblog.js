import "./headerblog.css"

import React from 'react'

export default function Headerblog() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg"> Blogs</span>
        <span className="headerTitleSm">“Blogging is to writing what extreme sports are to athletics: more free-form,<br/> more accident-prone, less formal, more alive. It is, in many ways, 
       <br/> writing out loud.” – Andrew Sullivan</span>
 
      </div>

      <img className="headerImg"
      src="https://images.unsplash.com/photo-1566050980594-f65e237a2e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt=""
      />
    </div>
  )
}
