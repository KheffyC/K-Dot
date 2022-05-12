import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fadeInUp } from 'react-animations';
import Welcome from './Welcome';

const Home = () => {

  return (
    <div className='HomePage'>
      <br />
      <Welcome animationType = {fadeInUp} />
    </div>
  )
}

export default Home