import './SignUpFrame.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignUpFrame (props) {

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function handleChangeUserName(e) {
    setUserName(e.target.value)
    console.log('useStateName', userName)
  }

  function handleChangeUserPassword(e) {
    setUserPassword(e.target.value)
    console.log('useStateName', userPassword)
  }

  function handleChangeUserConfirmPassword(e) {
    setUserConfirmPassword(e.target.value)
    console.log('useStateName', userConfirmPassword)
  }
  
  function handleChangeUserEmail(e) {
    setUserEmail(e.target.value)
    console.log('useStateName', userEmail)
  }

  function handleSubmit(e){
    e.preventDefault();
    props.handleRegister({
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: userConfirmPassword
    })
      .then((res) => {
        console.log('OK ', res)
      })
  }


  return (
    <section className='signUpFrame'>
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