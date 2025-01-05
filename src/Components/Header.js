import { useState } from 'react';
import logo from '../Assets/logo.jpg';
import { IoMdMenu } from "react-icons/io";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [navBar, setNavBar] = useState("home");

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    AOS.init({duration: 1500});
},[]);
  
  return (
    <div className='header'>
      {/* logo */}
      <a href='#home' className='logo' data-aos='fade-down'>
        <img src={logo} />
        <h1>Amol</h1>
      </a>
      <nav className ={`${isOpen ? "open" : ""}`}>
        {/* list items in header part */}
        <div className='header-list'>
          <ul>
            <a data-aos='fade-down' href='#home'><li onClick={() => setNavBar("home")} className={navBar==="home"?"active" : ""}>Home</li></a>
            <a data-aos='fade-down' href='#about'><li onClick={() => setNavBar("about")} className={navBar==="about"?"active" : ""}>About</li></a>
            <a data-aos='fade-down' href='#resume'><li onClick={() => setNavBar("resume")} className={navBar==="resume"?"active" : ""}>Resume</li></a>
            <a data-aos='fade-down' href='#service'><li onClick={() => setNavBar("service")} className={navBar==="service"?"active" : ""}>Service</li></a>
            <a data-aos='fade-down' href='#skill'><li onClick={() => setNavBar("skill")} className={navBar==="skill"?"active" : ""}>Skill</li></a>
            <a data-aos='fade-down' href='#project'> <li onClick={() => setNavBar("project")} className={navBar==="project"?"active" : ""}>Project</li></a>
            <a data-aos='fade-down' href='#blogs'> <li onClick={() => setNavBar("my_blog")} className={navBar==="my_blog"?"active" : ""}>My Blog</li></a>
            <a data-aos='fade-down' href='#contact'><li onClick={() => setNavBar("contact")} className={navBar==="contact"?"active" : ""}>Contact</li></a> 
          </ul>
        </div>
      </nav>
      <div className='mobile-nav' onClick={toggleNavbar}>
        <div className='humber'>
          <IoMdMenu className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Header