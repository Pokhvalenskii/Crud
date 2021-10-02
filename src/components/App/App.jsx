import Main from '../Main/Main'
import api from '../../utils/api';
import SignInFrame from "../SignInFrame/SignInFrame";
import SignUpFrame from "../SingUpFrame/SignUpFrame";
import { Switch, Route } from 'react-router-dom';

function App() {

  function handleRegister(data) {
    console.log('sign up');
    return api.signup(data);
  }

  function handleLogin(data) {
    console.log('sign in');
    return api.signin(data);
  }
  

  return (
    <>
      {/* <Main /> */}
      <Switch>
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
    </>
  );
}

export default App;
