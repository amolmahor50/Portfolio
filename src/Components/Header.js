import logo from '../Assets/logo.jpg'

function Header() {
  return (
    <div className='header'>
      {/* logo */}
      <nav>
        <div className='logo'>
          <img src={logo} />
          <h1>Amol</h1>
        </div>
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
    </div>
  )
}

export default Header