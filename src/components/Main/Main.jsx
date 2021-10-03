import Header from "../Header/Header";
import CreateFrame from "../CreateFrame/CreateFrame";
import DeletePost from "../DeletePost/DeletePost";
import Post from "../Post/Post";
import MoreBtn from "../MoreBtn/MoreBtn";

function Main (props) {

  let renderPosts = [];
  // console.log('main posts', props.posts.length);
  if(props.posts.length === undefined) {
    console.log('пока не загрузились', props.posts)
  } else {
    console.log('загрузились', props.posts)
    props.posts.forEach(post => {
      // console.log(post)
      renderPosts.push(post);
    })

  }

  return (
    <>
      <Header
        logout={props.logout}
      />
      {
        renderPosts.slice(0, props.hiddenPost).map(post => (
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