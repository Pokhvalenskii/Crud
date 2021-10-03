import './Post.css'

function Post (props) {
  return(
    <section className='post'>
      <div className='post__menu'>
        <p className='post__user'>[User id:{props.post.user_id}]$</p>
        <div className='post__wrapper'>
          <button className='post__btn'>[&gt;]</button>
          <button className='post__btn'>[X]</button>
        </div>
      </div>
      <div className='post__text'>{props.post.text}</div>
    </section>
  );
}

export default Post;