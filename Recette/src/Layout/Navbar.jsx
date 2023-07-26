import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-main'>
            <Link to='/'>Home</Link>
            <Link to='/formulaire'>Formulaire</Link>
        </div>
    )
}

export default Navbar
