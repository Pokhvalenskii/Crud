import './DeletePost.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from "react/cjs/react.development";

function DeletePost (props) {

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className='deletePost'>
      <h1 className='deletePost__title'>Delete post</h1>
      <div className='deletePost__menu'>
        <p className='deletePost__text'>[${currentUser.email}~]</p>
        <button className='deletePost__btn deletePost__btn_type_exit' onClick={() => {
          props.setDeletePostFrameActive(false);
        }}>Exit</button>
      </div>
      <div className='deletePost__wrapper'>
        <p className='deletePost__text'>[${currentUser.email}~]&</p>
        <button className='deletePost__btn deletePost__btn_type_delete'
        onClick={() => {
          props.handleDelete()}}>delete post</button>
      </div>
    </section>
  );
}

export default DeletePost;