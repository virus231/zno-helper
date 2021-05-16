import React, {lazy, Suspense} from 'react';
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';  
import {Switch, Redirect, withRouter} from 'react-router-dom';
import {ResetPassword, Subject, Tests, CreateTests, DuelStart, ChoiceSubjects, DuelJoin, DuelTest} from './pages/index'
import SideBar from './components/SideBar/SideBar'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Spinner } from './components/Spinner';
import { authSelector } from './store/selectors';
import { SimpleAlert } from './components/Alert/Alert';
import './pages/main.scss'
import PageRoute from './components/PageRoute/PageRoute';


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

function App(props: any) {
    const classes = useStyles();
    const {loading,token} = useSelector(authSelector)

    const hideSidebar = props.location.pathname !== '/duel-start'

    
    return (
        <Suspense fallback={<Spinner/>}>
            <Backdrop className={classes.backdrop} open={loading}>
              <CircularProgress color="inherit" />
            </Backdrop>
            <div className="App">
                <SimpleAlert alert={""}/>
                <Switch>
                    <PageRoute exact path="/" component={SignUp} isPublic/>
                    <PageRoute exact path="/login" component={LogIn} isPublic />
                    <PageRoute exact path="/reset" component={ResetPassword} isPublic/>
                    <PageRoute exact path="/choice-subjects" component={ChoiceSubjects}/>
                    <div className="d-flex align-items-center justify-content-center">
                        {hideSidebar && <SideBar/>}
                        <PageRoute exact path="/home" component={Home}/>
                        <PageRoute exact path="/duel-start" component={DuelStart}/>
                        <PageRoute exact path="/duel-test" component={DuelTest}/>
                        <PageRoute exact path="/create-test/:id" component={CreateTests}/>
                        <PageRoute exact path="/tests/:id" component={Tests}/>
                        <PageRoute exact path="/subject/:id" component={Subject}/>
                        <PageRoute exact path="/duel-join/:id" component={DuelJoin}/>
                    </div>
                </Switch>
                <Redirect  to='/home'/>
            </div>
        </Suspense>
    );
}

export default withRouter(App);
