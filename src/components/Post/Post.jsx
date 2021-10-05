import './Post.css'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from "react/cjs/react.development";
import DeletePost from '../DeletePost/DeletePost';
import { Link } from 'react-router-dom';


function Post (props) {

  const { currentUser } = useContext(CurrentUserContext);
  const [ deletePostFrameActive, setDeletePostFrameActive] = useState(false);

  function handleDelete() {
    props.deletePost(props.post.id)
  }

  const color = props.post.user_id === currentUser.id ? 'post__btn_color_green' : ''


  return(
    <section className='post'>
      <div className='post__menu'>
        <p className={`post__user ${color}`}>[User id:{props.post.user_id}]$</p>
        <div className='post__wrapper'>
          {props.post.user_id === currentUser.id && <button className='post__btn' onClick={() => {setDeletePostFrameActive(true)}}>[X]</button>}
          <Link className='post__btn' to={`/post/${props.post.id}`}>[?]</Link>
        </div>
      </div>
      <div className='post__text'>{props.post.text}</div>
      {deletePostFrameActive && <DeletePost
        setDeletePostFrameActive={setDeletePostFrameActive}
        handleDelete={handleDelete}
        post={props.post}
      />}
    </section>
  );
}

export default Post;