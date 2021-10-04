import './Comment.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from "react/cjs/react.development";

function Comment(props) {
  console.log('COMMENT CHECK', props.post)
  const { currentUser } = useContext(CurrentUserContext);

  return(
    <>
      {
        props.post.map((comment) => (
            <div key={comment.id} className='comment'>
              <p className='comment__text'>{comment.text}</p>
              <button className='comment__btn'>[X]</button>
            </div>
        ))
      }
    </>
  )
}

export default Comment;