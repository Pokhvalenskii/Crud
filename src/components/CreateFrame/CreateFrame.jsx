import { useState } from 'react/cjs/react.development';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from "react/cjs/react.development";
import './CreateFrame.css'

function CreateFrame (props) {

  const { currentUser } = useContext(CurrentUserContext);
  const [ postText, setPostText ] = useState('');

  function handleChangePostText(e) {
    setPostText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.createPost(postText)
      .then(() => {
        props.setCreateFrameActive(false)
      })
  }

  return (
    <section className='createFrame'>
      <h1 className='createFrame__title'>Create post</h1>
      <div className='createFrame__menu'>
        <p className='text'>[${currentUser.email}~]</p>
        <button className='createFrame__btn' onClick={() => {
          props.setCreateFrameActive(false)
        }}>Exit</button>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <textarea
          className='form__textarea'
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder='enter text...'
          maxLength='280'
          value={postText}
          onChange={handleChangePostText}>
        </textarea>
        <div className='form__wrapper'>
          <p className='text'>[${currentUser.email}~]</p>
          <button className='form__button' type='submit'>enter</button>
        </div>
      </form>
    </section>
  );
}

export default CreateFrame;