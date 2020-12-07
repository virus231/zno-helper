import React from 'react';
import './App.css';
import  {Switch, Route, Redirect} from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/signup" component={SignUp}/>
                {/*<Route exact path="/" component={}/>*/}
                {/*<Route exact path="/" component={}/>*/}
                <Redirect to="/signup"/>
            </Switch>
        </div>
    );
}

export default App;
