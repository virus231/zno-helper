import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert, { Color } from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from 'react-redux'
import { alertSelector } from '../../store/selectors';

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
    const [open, setOpen] = React.useState(true);
    const {alerts} = useSelector(alertSelector)
    const color:Color = "warning"
    const alertColor:Color = alerts.type

    console.log(alertColor)

    if(!alerts.text) {
        return  null
    }

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    variant="filled"
                    severity={alertColor??color}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {alerts.text}
                </Alert>
            </Collapse>
        </div>
    )
}