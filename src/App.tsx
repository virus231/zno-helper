import React from 'react';
import './App.scss';
import {Switch, Route, Redirect} from 'react-router-dom';
import {SignUp, LogIn, ResetPassword, Subjects, Home, Subject, Tests, CreateTests, DuelStart, ChoiceSubjects, DuelJoin, DuelTest} from './pages/index'
import SideBar from './components/SideBar/SideBar'
// import SingleAnswer from "./components/SingleAnswer";
import CreateTest from "./pages/CreateTest";
import './pages/styles/main.scss'

function App():JSX.Element {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={SignUp}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/reset" component={ResetPassword}/>
                <Route exact path="/choice-subjects" component={ChoiceSubjects}/>
                <div className="d-flex align-items-center justify-content-center home">
                    <SideBar/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/tests/:id" component={Tests}/>
                    <Route exact path="/subject/:id" component={Subject}/>
                    <Route exact path="/create-test" component={CreateTests}/>
                    <Route exact path="/duel-start" component={DuelStart}/>
                    <Route exact path="/duel-join/:id" component={DuelJoin}/>
                    <Route exact path="/duel-test" component={DuelTest}/>
                </div>
                <Redirect to="/signup"/>
            </Switch>
        </div>
    );
}

export default App;
