import './Comment.css'

function Comment(props) {

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