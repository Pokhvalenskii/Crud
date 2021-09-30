import './CreateFrame.css'

function CreateFrame (props) {
  return (
    <section className='createFrame'>
      <h1 className='createFrame__title'>Create post</h1>
      <div className='createFrame__menu'>
        <p className='text text_color_red'>[UserEmail~]</p>
        <button className='createFrame__btn'>[Exit~]</button>
      </div>
      <form className='form'>
        <textarea
          className='form__textarea'
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder='enter text...'
          maxLength='280'>
        </textarea>
        <div className='form__wrapper'>
          <p className='text text_color_red'>[UserEmail~]$</p>
          <button className='form__button'>enter</button>
        </div>
      </form>
    </section>
  );
}

export default CreateFrame;