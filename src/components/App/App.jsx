import Main from '../Main/Main'
import api from '../../utils/api';
import SignInFrame from "../SignInFrame/SignInFrame";
import SignUpFrame from "../SingUpFrame/SignUpFrame";
import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState({});
  const [hiddenPost, setHiddenPost] = useState(5);
  const JWTtoken = localStorage.getItem('jwt');

  useEffect(() => {
    console.log('useEffect')
    showPosts();
    console.log('statePOsts',posts)
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
    // console.log('sign up');
    return api.signup(data);
  }

  function showPosts() {
    return api.showPosts()
      .then((res) => {
        setPosts(res)
      })
  }

  function handleLogin(data) {
    // console.log('sign in');
    return api.signin(data)
      .then((res) => {
        // console.log('flag1', res.token)
        setLoggedIn(true);
        api.aboutMe({
          jwt: res.token
        })
          .then((res) => {
            setCurrentUser(res);
            setLoggedIn(true);
            // console.log('RES', res)
            history.push('/')
          })
        localStorage.setItem('jwt', res.token);
      })
  }

  function logout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    console.log('logout', localStorage);
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, loggedIn}}>
      {/* <Main /> */}
      <Switch>
        <Route exact path='/'>
          <Main
            logout={logout}
            posts={posts}
            morePosts={morePosts}
            hiddenPost={hiddenPost}
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
