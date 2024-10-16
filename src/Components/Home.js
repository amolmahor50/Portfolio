import React from 'react'
import home from '../Assets/home.jpg'

function Home() {
  return (
    <div className='home-container' id='home'>
        {/* content homepage */}
        <div className='home-content'>
            <span className='wrapper-text'>HELLO!</span>
            <h1>I'm <span>Amol<br/> Mahor</span></h1>
            <p className='wrapper-text-2'>A freelancer frontend developer</p>
            <div className='btns'>
              <button className='active-btn'>HIRE ME</button>
              <a href='#service'><button>MY WORK</button></a>
            </div>
        </div>
        {/* img home */}
        <div className='home-img'>
          <img src={home} />
        </div>
    </div>
  )
}

export default Home;