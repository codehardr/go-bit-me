import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        Go<span>Bit</span>Me
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Idea</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
