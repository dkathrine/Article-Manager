import { Link, NavLink } from "react-router-dom";
/* import { About, Contact, Home, Article } from "./pages/index"; */

const Navbar = () => {
  return (
            <nav>
          <Link to="/">
            <h1>My Articles</h1>
          </Link>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/form">Post a new Article</NavLink>
        </nav>
  )
}

export default Navbar