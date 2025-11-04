// importo router dom 
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          La mia app
        </Link>
      </div>
    </nav>
  )
}

export default Header