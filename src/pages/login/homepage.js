import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

 const HomePage =({role})=> {

    return (
        <div className="text-center">
            <Navbar/>
            {role}
            <h1 className="main-title home-page-title">welcome to Learny</h1>

        </div>
    )
}
export default HomePage