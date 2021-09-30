import './Post.css'

function Post (props) {
  return(
    <section className='post'>
      <div className='post__menu'>
        <p className='post__user'>[MyEmail~]$</p>
        <div className='post__wrapper'>
          <button className='post__btn'>[&gt;]</button>
          <button className='post__btn'>[X]</button>
        </div>
      </div>
      <div className='post__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus alias eligendi optio maiores magni expedita necessitatibus accusantium accusamus repellendus ab?</div>
    </section>
  );
}

export default Post;