import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert, { Color } from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from 'react-redux'
import { alertSelector, authSelector } from '../../store/selectors';
import { resetError } from '../../store/reducers/alert.reducer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '20%',
            zIndex: 10  ,
            position: 'absolute',
            right: '20px',
            top: '20px',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);


interface Alert {
    alert: any
}

export const SimpleAlert:FC<Alert> = ({alert}) => {
    const classes = useStyles();
    const {alerts} = useSelector(alertSelector)
    const {token, error} = useSelector(authSelector)
    const dispatch = useDispatch()
    const color:Color = "warning"
    const alertColor:Color = alerts.type


    if(!alerts.text) {
        return null
    }

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(resetError())
    };


    return (
        <div className={classes.root}>
            <Snackbar open={error} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertColor??color}>
                    {alerts.text}
                </Alert>
            </Snackbar>
        </div>
    )
}