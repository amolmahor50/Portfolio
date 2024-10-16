import { useState } from 'react';
import logo from '../Assets/logo.jpg';
import { IoMdMenu } from "react-icons/io";


function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setNavBar] = useState("home");

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
            <li onClick={() => setNavBar("home")} className={navBar==="home"?"active" : ""}>Home</li>
            <li onClick={() => setNavBar("about")} className={navBar==="about"?"active" : ""}>About</li>
            <li onClick={() => setNavBar("resume")} className={navBar==="resume"?"active" : ""}>Resume</li>
            <li onClick={() => setNavBar("service")} className={navBar==="service"?"active" : ""}>Service</li>
            <li onClick={() => setNavBar("skill")} className={navBar==="skill"?"active" : ""}>Skill</li>
            <li onClick={() => setNavBar("project")} className={navBar==="project"?"active" : ""}>Project</li>
            <li onClick={() => setNavBar("my_blog")} className={navBar==="my_blog"?"active" : ""}>My Blog</li>
            <li onClick={() => setNavBar("contact")} className={navBar==="contact"?"active" : ""}>Contact</li>
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