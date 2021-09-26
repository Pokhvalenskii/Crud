import './SignInFrame.css'

function SignInFrame (props) {
  return (
    <section className='signInFrame'>
      <h1 className='signInFrame__title'>Sign In</h1>
      <form className='form'>
        <div className='form__input-string'>
          <p className='text text_color_red'>login as:</p>
          <p className='text'>USER_EMAIL=</p>
          <input className='form__input' type="text" />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>Password:</p>
          <p className='text'>PASSWORD=</p>
          <input className='form__input' type="password" />
        </div>
        <div className='form__input-string'>
          <p className='text text_color_red'>[confirm@button~]$</p>
          <button className='button button_place_form'>enter</button>
        </div>
      </form>
      <div className='text-wrapper'>
        <p className='text'>Don't have an account?</p>
        <button className='button button_place_form'>Sign Up</button>
      </div>
    </section>
  );
}

export default SignInFrame;