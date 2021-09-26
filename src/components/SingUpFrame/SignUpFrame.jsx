import './SignUpFrame.css';

function SignUpFrame (props) {
  return (
    <section className='signUpFrame'>
      <h1 className='signUpFrame__title'>Sign Up</h1>
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
        <p className='text'>Already have an account?</p>
        <button className='button button_place_form'>Sign In</button>
      </div>
    </section>
  );
}

export default SignUpFrame;