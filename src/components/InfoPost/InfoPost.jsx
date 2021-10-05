import './InfoPost.css'
import { useParams } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from "react/cjs/react.development";
import Comment from '../Comment/Comment'
import EditPostFrame from '../EditPostFrame/EditPostFrame';
import Header from "../Header/Header";
import DeletePost from '../DeletePost/DeletePost';



function InfoPost(props) {

  const { currentUser } = useContext(CurrentUserContext);
  const { idPost } = useParams();
  const [ editPostFrameActive,
     setEditPostFrameActive] = useState(false);

  const [ deletePostFrameActive, setDeletePostFrameActive] = useState(false);
  
  

  let renderPost = '';
  let renderNewPost = [];

  if(props.posts.length !== undefined) {
    props.posts.forEach(post => {
      if(post.id === Number(idPost)) {
        renderNewPost.push(post);
        renderPost = post;
      }
    })
  }
  const color = currentUser.id === renderPost.user_id ? 'infoPost__text_color_green' : ''

  function handleDelete() {
    props.deletePost(renderPost.id)
  }

  return(
    <>
    <Header logout={props.logout}/>
    <section className='infoPost'>
      <div className='infoPost__menu'>
        <p className={`infoPost__user ${color}`}>${renderPost.user_id}</p>
        <div className='infoPost__wrapper'>
          {renderPost.user_id === currentUser.id &&
          <button
            className='infoPost__btn' onClick={() => {
              setEditPostFrameActive(true);
            }}>[...]
          </button>}
          {renderPost.user_id === currentUser.id && <button className='infoPost__btn' onClick={() => {setDeletePostFrameActive(true)}}>[X]</button>}
          <button className='post__btn'>[&rarr;]</button>
        </div>
      </div>
      <div className='infoPost__text'>{renderPost.text}</div>
      {
        renderNewPost.map((post) => (
          <Comment
            key={post.id}
            post={post.comments}
          />
        ))
      }
      {editPostFrameActive && <EditPostFrame
        editPost={props.editPost}
        currentUser={currentUser}
        setEditPostFrameActive={setEditPostFrameActive}
        postId={renderPost.id}
      />}
      {deletePostFrameActive && <DeletePost
        setDeletePostFrameActive={setDeletePostFrameActive}
        handleDelete={handleDelete}
        post={props.post}
      />}
    </section>
    </>
  )
}

export default InfoPost;