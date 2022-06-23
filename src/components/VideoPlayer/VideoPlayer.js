
import React, { Component } from 'react';
import '../VideoPlayer/VideoPlayer.css';
import { MdOutlineForward10 } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';


export default function VideoPlayer() {
  return (
    <div>
      <ReactPlayer url={"https://youtu.be/JFlIdSZ-U4k"} controls></ReactPlayer>
    </div>
  )
}
