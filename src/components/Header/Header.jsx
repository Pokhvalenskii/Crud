import './Header.css'
import logo from '../../images/logo.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function Header (props) {

  // const context = useContext(CurrentUserContext);
  const { currentUser, loggedIn } = useContext(CurrentUserContext);

  // console.log('USER', currentUser)

  function handleExit() {
    console.log('exitHeader')
    props.logout();
  }

  return (
    <section className='header'>
      <img className='logo' src={logo} alt='Логотип'></img>
      <ul className='header__menu'>
        <li className='header__menu-item'>
          {loggedIn && <a className='link' href='/test'>[${currentUser.name}]</a>}
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
