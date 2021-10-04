import './CreatePost.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useState } from "react/cjs/react.development";
import CreateFrame from '../CreateFrame/CreateFrame';

function CreatePost(props) {
  const [ createFrameActive, setCreateFrameActive] = useState(false)
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className='createPost'>
      <div className='createPost__wrapper'>
        <h2 className='createPost__user'>[${currentUser.name}]</h2>
        <button className='createPost__btn' onClick={() => {setCreateFrameActive(true)}}>crate post</button>
      </div>
      {createFrameActive && <CreateFrame setCreateFrameActive={setCreateFrameActive} createPost={props.createPost}/>}
    </section>
  )
}

export default CreatePost;