import './DeletePost.css'

function DeletePost (props) {
  return (
    <section className='deletePost'>
      <h1 className='deletePost__title'>Delete post</h1>
      <div className='deletePost__menu'>
        <p className='deletePost__text'>[UserEmail~]</p>
        <button className='deletePost__btn deletePost__btn_type_exit'>[Exit~]</button>
      </div>
      <div className='deletePost__wrapper'>
        <p className='deletePost__text'>[UserEmail~]&</p>
        <button className='deletePost__btn deletePost__btn_type_delete'>delete post</button>
      </div>
    </section>
  );
}

export default DeletePost;