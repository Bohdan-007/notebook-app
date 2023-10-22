import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './Nav.scss';


const Nav = () => {

  const setActive = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className="navbar navbar-expand-lg nav my-nav">
      <div className='container'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className={`nav-link text-light rounded-3 ${setActive}`}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/notes' className={`nav-link text-light rounded-3 ${setActive}`}>Notes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/todo' className={`nav-link text-light rounded-3 ${setActive}`}>Todo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Nav;