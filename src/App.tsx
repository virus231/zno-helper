import React from 'react';
import './App.css';
import  {Switch, Route, Redirect} from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from "./pages/LogIn";
import ResetPassword from './pages/ResetPassword'
import Subjects from './components/Subjects'

import './pages/styles/main.scss'

function App():JSX.Element {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/reset" component={ResetPassword}/>
                <Route exact path="/subjects" component={Subjects}/>
                <Redirect to="/signup"/>
            </Switch>
        </div>
    );
}

export default App;
