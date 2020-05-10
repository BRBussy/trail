import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core'
import {Router, publicRoutes} from 'route';
import background from 'assets/background.png'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
            style={{height: window.innerHeight}}
        >
            <BrowserRouter>
                <Router routes={publicRoutes}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
