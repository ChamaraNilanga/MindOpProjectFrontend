import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SubjectBar from '../../components/SubjectBar/SubjectBar'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

export default function ViewVideos() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div >
      <div className='panel'>
            <div>
            <SubjectBar/>
            </div>

            <div className='Video'>
              <VideoPlayer></VideoPlayer>
            </div>
      </div>
    </div>
  )
}
