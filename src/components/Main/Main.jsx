import Header from "../Header/Header";
import CreateFrame from "../CreateFrame/CreateFrame";
import DeletePost from "../DeletePost/DeletePost";
import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import MoreBtn from "../MoreBtn/MoreBtn";

function Main (props) {

  let renderPosts = [];
  if(props.posts.length === undefined) {
    console.log('пока не загрузились', props.posts)
  } else {
    console.log('загрузились', props.posts)
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