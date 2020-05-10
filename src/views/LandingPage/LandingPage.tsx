import React from 'react'
import {Button, makeStyles} from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <Button
                onClick={() => history.push('/login')}
                variant={'contained'}
                color={'primary'}
                children={'Login'}
            />
        </div>
    )
}