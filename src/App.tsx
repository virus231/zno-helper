import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar'
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { authSelector } from './store/selectors';
import './pages/main.scss'
import { getUser } from './store/actions/thunks';
import { setAxiosInterceptor } from './utils/axios';
import { ResetPassword, Subject, CreateTests, DuelStart, ChoiceSubjects, DuelJoin, DuelTest, Test, Tests } from './pages/index'
import PageRoute from './components/PageRoute/PageRoute';
import { SimpleAlert } from './components/Alert/Alert';
import { Spinner } from './components/Spinner';

import 'react-circular-progressbar/dist/styles.css';

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
// const Tests = lazy(() => import('./pages/Tests').then(({ Tests }) => ({ default: Tests })))
const Profile = lazy(() => import('./pages/Profile').then(({ Profile }) => ({ default: Profile })))
// const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })))
// const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })))
// const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })))
// const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })))

function App(props: any) {
    const classes = useStyles();
    const { loading, token } = useSelector(authSelector)
    const dispatch = useDispatch()

    const hideSidebar = props.location.pathname !== '/duel-start'
    const hdSidebar = props.location.pathname !== '/test/:id'

    React.useEffect(() => {
        setAxiosInterceptor(token)
    }, [token])

    React.useEffect(() => {
        if (token)
            dispatch(getUser())
    }, [dispatch, token])

    return (
        <Suspense fallback={<Spinner />}>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="App">
                <SimpleAlert alert={""} />
                <Switch>
                    <PageRoute exact path="/" component={SignUp} isPublic />
                    <PageRoute exact path="/login" component={LogIn} isPublic />
                    <PageRoute exact path="/reset" component={ResetPassword} isPublic />
                    <PageRoute exact path="/choice-subjects" component={ChoiceSubjects} />
                    <div className="">
                        {hideSidebar && <SideBar />}
                        <PageRoute exact path="/home" component={Home} />
                        <PageRoute exact path="/duel-start" component={DuelStart} />
                        <PageRoute exact path="/duel-test" component={DuelTest} />
                        <PageRoute exact path="/profile" component={Profile}/>
                        <PageRoute exact path="/create-test/:id" component={CreateTests} />
                        <PageRoute exact path="/tests/:id" component={Tests} />
                        <PageRoute exact path="/test/:subject/:theme/:testId" component={Test} />
                        <PageRoute exact path="/subject/:id" component={Subject} />
                        <PageRoute exact path="/duel-join/:id" component={DuelJoin} />
                    </div>
                </Switch>
                <Redirect to='/home' />
            </div>
        </Suspense>
    );
}

export default withRouter(App);
