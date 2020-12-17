import React from 'react';
import './App.scss';
import {Container} from "react-bootstrap";
import  {Switch, Route, Redirect} from 'react-router-dom';
import {SignUp, LogIn, ResetPassword, ChoiceSubjects, Home, Subject, Subjects, Tests, Test} from './pages/index'
import SideBar from './components/SideBar'

import './pages/styles/main.scss'

function App():JSX.Element {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={SignUp}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/reset" component={ResetPassword}/>
                <Route exact path="/subjects" component={ChoiceSubjects}/>
                <div className="d-flex home">
                    <SideBar/>
                    <Container fluid>
                        <Route exact path="/subject/:id" component={Subject}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/tests" component={Tests}/>
                        <Route exact path="/subject-page" component={Subjects}/>
                        <Route exact path="/test/:id" component={Test}/>
                    </Container>
                </div>
                <Redirect to="/signup"/>
            </Switch>
        </div>
    );
}

export default App;
