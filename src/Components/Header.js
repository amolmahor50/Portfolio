import { useState } from 'react';
import logo from '../Assets/logo.jpg';
import { IoMdMenu } from "react-icons/io";


function Header() {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className='header'>
      {/* logo */}
      <div className='logo'>
        <img src={logo} />
        <h1>Amol</h1>
      </div>
      <nav className ={`${isOpen ? "open" : ""}`}>
        {/* list items in header part */}
        <div className='header-list'>
          <ul>
            <li className='active'>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Service</li>
            <li>Skill</li>
            <li>Project</li>
            <li>My Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className='mobile-nav' onClick={toggleNavbar}>
        <div className='humber'>
          <IoMdMenu className='icon' />
          <p>menu</p>
        </div>
      </div>
    </div>
  )
}

export default Header