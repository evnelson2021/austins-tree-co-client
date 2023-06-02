import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/services">Services</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/gallery">Gallery</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

