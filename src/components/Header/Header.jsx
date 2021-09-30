import './Header.css'
import logo from '../../images/logo.svg'

function Header (props) {
  return (
    <section className='header'>
      <img className='logo' src={logo} alt='Логотип'></img>
      <ul className='header__menu'>
        <li className='header__menu-item'>
          <a className='link' href='/test'>[UserEmail~]</a>
        </li>
        <li className='header__menu-item'>
          <a className='link' href='/test'>[Exit~]</a>
        </li>
      </ul>
    </section>
  );
}

export default Header;
