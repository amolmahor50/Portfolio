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
      <a href='#home' className='logo'>
        <img src={logo} />
        <h1>Amol</h1>
      </a>
      <nav className ={`${isOpen ? "open" : ""}`}>
        {/* list items in header part */}
        <div className='header-list'>
          <ul>
            <a href='#home'><li onClick={() => setNavBar("home")} className={navBar==="home"?"active" : ""}>Home</li></a>
            <a href='#about'><li onClick={() => setNavBar("about")} className={navBar==="about"?"active" : ""}>About</li></a>
            <a href='#resume'><li onClick={() => setNavBar("resume")} className={navBar==="resume"?"active" : ""}>Resume</li></a>
            <a href='#service'><li onClick={() => setNavBar("service")} className={navBar==="service"?"active" : ""}>Service</li></a>
            <a href='#skill'><li onClick={() => setNavBar("skill")} className={navBar==="skill"?"active" : ""}>Skill</li></a>
            <a href='#project'> <li onClick={() => setNavBar("project")} className={navBar==="project"?"active" : ""}>Project</li></a>
            <a href='#blogs'> <li onClick={() => setNavBar("my_blog")} className={navBar==="my_blog"?"active" : ""}>My Blog</li></a>
            <a href='#contact'><li onClick={() => setNavBar("contact")} className={navBar==="contact"?"active" : ""}>Contact</li></a> 
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