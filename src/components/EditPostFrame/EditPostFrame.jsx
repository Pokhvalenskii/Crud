import './EditPostFrame.css'
import { useState } from 'react/cjs/react.development';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from "react/cjs/react.development";

function EditPostFrame(props) {

  const { currentUser } = useContext(CurrentUserContext);
  const [ postText, setPostText ] = useState('');

  function handleChangePostText(e) {
    setPostText(e.target.value);
    console.log('postText', postText)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editPost({
      text: postText,
      id: props.postId,
    })
      .then(() => {
        props.setEditPostFrameActive(false)
      })
  }

  return (
    <section className='editPostFrame'>
      <h1 className='editPostFrame__title'>Edit post</h1>
      <div className='editPostFrame__menu'>
        <p className='text'>[${currentUser.email}~]</p>
        <button className='editPostFrame__btn' onClick={() => {
          props.setEditPostFrameActive(false)
        }}>[Exit~]</button>
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
  )
}

export default EditPostFrame;