import SignInFrame from "../SignInFrame/SignInFrame";
import SignUpFrame from "../SingUpFrame/SignUpFrame";
import Header from "../Header/Header";
import CreateFrame from "../CreateFrame/CreateFrame";
import DeletePost from "../DeletePost/DeletePost";
import Post from "../Post/Post";

function Main (props) {
  return (
    <>
      <Header />
      {/* <Post /> */}
      {/* <DeletePost /> */}
      {/* <CreateFrame /> */}
      {/* <SignInFrame /> */}
      <SignUpFrame />
    </>
  );
}

export default Main;