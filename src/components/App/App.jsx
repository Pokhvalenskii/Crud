import Main from '../Main/Main'
import api from '../../utils/api';
import SignInFrame from "../SignInFrame/SignInFrame";
import SignUpFrame from "../SingUpFrame/SignUpFrame";
import InfoPost from '../InfoPost/InfoPost';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState({});
  const [hiddenPost, setHiddenPost] = useState(10);
  const JWTtoken = localStorage.getItem('jwt');

  useEffect(() => {
    showPosts();
    if(JWTtoken !== null) {
      api.aboutMe({
        jwt: JWTtoken
      })
        .then((res) => {
          setCurrentUser(res)
          setLoggedIn(true)
        })
    }
  }, []);

  function morePosts() {
    setHiddenPost((value) => value + 5);
  }

  function handleRegister(data) {
    return api.signup(data);
  }

  function showPosts() {
    return api.showPosts()
      .then((res) => {
        setPosts(res)
      })
  }

  function handleLogin(data) {
    return api.signin(data)
      .then((res) => {
        setLoggedIn(true);
        api.aboutMe({
          jwt: res.token
        })
          .then((res) => {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push('/')
          })
        localStorage.setItem('jwt', res.token);
      })
  }

  function logout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  function createPost(text) {
    const newData = {
      text: text,
      jwt: JWTtoken
    }
    return api.createPost(newData)
      .then(() => {
        showPosts();
      })
  }

  function deletePost(id) {
    const data = {
      id: id,
      jwt: JWTtoken
    }
    return api.deletePost(data)
      .then(() => {
        showPosts();
      })
  }

  function editPost(data) {
    const newData = {
      text: data.text,
      id: data.id,
      jwt: JWTtoken
    }
    return api.editPost(newData)
      .then((res) => {
        showPosts();
      })
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, loggedIn}}>
      <Switch>
        <Route exact path='/'>
          <Main
            createPost={createPost}
            logout={logout}
            posts={posts}
            morePosts={morePosts}
            hiddenPost={hiddenPost}
            deletePost={deletePost}
          />
        </Route>
        <Route path='/post/:idPost'>
          <InfoPost
            logout={logout}
            editPost={editPost}
            posts={posts}
            deletePost={deletePost}
          />
        </Route>
        <Route path='/signin'>
          <SignInFrame
            handleLogin={handleLogin}
          />
        </Route>
        <Route path='/signup'>
          <SignUpFrame
            handleRegister={handleRegister}
          />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
