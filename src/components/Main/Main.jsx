import Header from "../Header/Header";
import CreateFrame from "../CreateFrame/CreateFrame";
import DeletePost from "../DeletePost/DeletePost";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import MoreBtn from "../MoreBtn/MoreBtn";
import { Switch, Route, useHistory } from 'react-router-dom';


function Main (props) {

  let renderPosts = [];
  // console.log(props.posts)
  if(props.posts.length !== undefined) {
    props.posts.forEach(post => {
      renderPosts.push(post);
    })
  }

  return (
    <>
      <Header logout={props.logout}/>
      <CreatePost createPost={props.createPost}/>

      {
        renderPosts.reverse().slice(0, props.hiddenPost).map(post => (
          <Post
            key={post.id}
            post={post}
            deletePost={props.deletePost}
          />
        ))
      }
      <MoreBtn morePosts={props.morePosts}/>
      {/* <DeletePost /> */}
      {/* <CreateFrame /> */}
    </>
  );
}

export default Main;