import React from 'react';
import './App.scss';
import {Container} from "react-bootstrap";
import  {Switch, Route, Redirect} from 'react-router-dom';
import {SignUp, LogIn, ResetPassword, Subjects, Home, Subject, Tests} from './pages/index'
import SideBar from './components/SideBar'

import './pages/styles/main.scss'

function App():JSX.Element {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/reset" component={ResetPassword}/>
                <Route exact path="/subjects" component={Subjects}/>
                <div className="d-flex home">
                    <SideBar/>
                    <Container>
                        <Route exact path="/subject/:id" component={Subject}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/tests" component={Tests}/>
                        <Route exact path="/test/:id" component={Tests}/>
                    </Container>
                </div>
                <Redirect to="/signup"/>
            </Switch>
        </div>
    );
}

export default App;
