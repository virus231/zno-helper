import React, {lazy, Suspense} from 'react';
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';  
import {Switch, Route, Redirect} from 'react-router-dom';
import {ResetPassword, Subject, Tests, CreateTests, DuelStart, ChoiceSubjects, DuelJoin, DuelTest} from './pages/index'
import SideBar from './components/SideBar/SideBar'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './pages/main.scss'
import './App.scss';
import { Spinner } from './components/Spinner';
import { authSelector } from './store/selectors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { SimpleAlert } from './components/Alert/Alert';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

const SignUp = lazy(() => import('./pages/SignUp').then(({ SignUp }) => ({ default: SignUp })))
const LogIn = lazy(() => import('./pages/LogIn').then(({ LogIn }) => ({ default: LogIn })))
const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })))

function App():JSX.Element {
    const classes = useStyles();
    const {loading} = useSelector(authSelector)
    
    return (
        <Suspense fallback={<Spinner/>}>
            <Backdrop className={classes.backdrop} open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
            <div className="App">
                <SimpleAlert alert={""}/>
                <Switch>
                    <Route exact path="/" component={SignUp}/>
                    <Route exact path="/login" component={LogIn}/>
                    <Route exact path="/reset" component={ResetPassword}/>
                    <Route exact path="/choice-subjects" component={ChoiceSubjects}/>
                    <div className="d-flex align-items-center justify-content-center home">
                        <SideBar/>
                        <PrivateRoute exact path="/home" component={Home}/>
                        <PrivateRoute exact path="/tests/:id" component={Tests}/>
                        <PrivateRoute exact path="/subject/:id" component={Subject}/>
                        <PrivateRoute exact path="/create-test" component={CreateTests}/>
                        <PrivateRoute exact path="/duel-start" component={DuelStart}/>
                        <PrivateRoute exact path="/duel-join/:id" component={DuelJoin}/>
                        <PrivateRoute exact path="/duel-test" component={DuelTest}/>
                    </div>
                    <Redirect to="/signup"/>
                </Switch>
            </div>
        </Suspense>
    );
}

export default App;
