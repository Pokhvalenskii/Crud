import './SignInFrame.css'

function SignInFrame (props) {
  return (
    <section className='signInFrame'>
      <h1 className='signInFrame__title'>Sign In</h1>
      <form className='form'>
        <div className='form__input-string'>
          <p className='form__text'>login as:</p>
          <p className='form__user-email'>USER_EMAIL=</p>
          <input className='form__input' type="text" />
        </div>
        <div className='form__input-string'>
          <p className='form__text'>Password:</p>
          <p className='form__user-email'>PASSWORD=</p>
          <input className='form__input' type="password" />
        </div>
        <div className='form__input-string'>
          <p className='form__text'>[confirm@button~]$</p>
          <button className='button'>enter</button>
        </div>
      </form>
      <div className='text-wrapper'>
        <p className='text'>Already have an account?</p>
        <button className='button'>Sign In</button>
      </div>
    </section>
  );
}

export default SignInFrame;