import './Header.css';
import logo from '../../images/logo.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function Header (props) {

  const { currentUser, loggedIn } = useContext(CurrentUserContext);

  function handleExit() {
    props.logout();
  }

  return (
    <section className='header'>
      <Link to='/'><img className='logo' src={logo} alt='Логотип'></img></Link>      
      <ul className='header__menu'>
        <li className='header__menu-item'>
          {loggedIn && <Link className='link' to='/profile'>[${currentUser.name}]</Link>}
        </li>
        <li className='header__menu-item'>
          {loggedIn && <Link className='link' to='/signin' onClick={handleExit}>[Exit~]</Link>}
          {!loggedIn && <Link className='link' to='/signin' onClick={handleExit}>[Sign In~]</Link>}
        </li>
      </ul>
    </section>
  );
}

export default Header;
