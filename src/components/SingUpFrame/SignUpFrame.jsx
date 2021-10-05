import './SignUpFrame.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo.svg';


function SignUpFrame (props) {

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const history = useHistory();


  function handleChangeUserName(e) {
    setUserName(e.target.value)
  }

  function handleChangeUserPassword(e) {
    setUserPassword(e.target.value)
  }

  function handleChangeUserConfirmPassword(e) {
    setUserConfirmPassword(e.target.value)
  }
  
  function handleChangeUserEmail(e) {
    setUserEmail(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    props.handleRegister({
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: userConfirmPassword
    })
      .then(() => {
        history.push('/signin')
      })
  }


  return (
    <section className='signUpFrame'>
      <Link to='/'><img className='signUpFrame__logo' src={logo} alt='Логотип'></img></Link>
      <h1 className='signUpFrame__title'>Sign Up</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__input-string'>
          <p className='text text_color_red'>register as:</p>
          <p className='text'>USER_EMAIL=</p>
          <input 
            className='form__input' 
            type='email'
            placeholder='enter email'
            required
            value={userEmail}
            onChange={handleChangeUserEmail}
          />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>register as:</p>
          <p className='text'>USER_NAME=</p>
          <input 
            className='form__input' 
            type="text"
            placeholder='enter name'
            required
            value={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>password:</p>
          <p className='text'>PASSWORD=</p>
          <input 
            className='form__input' 
            type="password"
            placeholder='enter password'
            required
            value={userPassword}
            onChange={handleChangeUserPassword}
          />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>confirm password:</p>
          <p className='text'>PASSWORD=</p>
          <input 
            className='form__input' 
            type="password"
            placeholder='enter password'
            required
            value={userConfirmPassword}
            onChange={handleChangeUserConfirmPassword}
          />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>[confirm@button~]$</p>
          <button className='button button_place_form' type='submit'>enter</button>
        </div>
      </form>
      <div className='text-wrapper'>
        <p className='text'>Already have an account?</p>
        <Link className='button button_place_form' to='/signin'>Sign In</Link>
      </div>
    </section>
  );
}

export default SignUpFrame;