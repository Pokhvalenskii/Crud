import './SignInFrame.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignInFrame (props) {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleChangeUserEmail(e) {
    setUserEmail(e.target.value);
  }

  function handleChangeUserPassword(e) {
    setUserPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('check');
    props.handleLogin({
      email: userEmail,
      password: userPassword
    })
      .then((res) => {
        console.log('OK ', res)
      })
  }

  return (
    <section className='signInFrame'>
      <h1 className='signInFrame__title'>Sign In</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__input-string'>
          <p className='text text_color_red'>login as:</p>
          <p className='text'>USER_EMAIL=</p>
          <input 
            className='form__input' 
            type="text" 
            placeholder='enter email'
            required
            value={userEmail}
            onChange={handleChangeUserEmail}
          />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>Password:</p>
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
          <p className='text text_color_red'>[confirm@button~]$</p>
          <button className='button button_place_form' type='submit'>enter</button>
        </div>
      </form>
      <div className='text-wrapper'>
        <p className='text'>Don't have an account?</p>
        <Link className='button button_place_form' to='/signup'>Sign Up</Link>
      </div>
    </section>
  );
}

export default SignInFrame;