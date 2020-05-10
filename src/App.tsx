import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core'
import {Router, publicRoutes} from 'route';
import background from 'assets/background.png'
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import cx from 'classnames';

const drawerWidth = 260;
const drawerMiniWidth = 80;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden'
    },
    mainPanel: {
        transitionProperty: 'top, bottom, width',
        transitionDuration: '.2s, .2s, .35s',
        transitionTimingFunction: 'linear, linear, ease',
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: 'hidden',
        position: 'relative',
        float: 'right',
        transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
        maxHeight: '100%',
        width: '100%',
        overflowScrolling: 'touch'
    },
    mainPanelSidebarMini: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerMiniWidth}px)`
        }
    },
    content: {
        marginTop: '50px',
        padding: theme.spacing(1),
        height: 'calc(100vh)',
        overflowY: 'hidden'
    },
    container: {
        height: 'calc(100vh - 55px)',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }
}));

function App() {
    const classes = useStyles();
    const [sideBarOpen, setSidebarOpen] = useState(false);
    const [miniActive, setMiniActive] = useState(false);
    const [sidebarMinimize, setSidebarMinimize] = useState(false)

    return (
        <div
            className={classes.root}
            style={{height: window.innerHeight}}
        >
            <Sidebar
                open={sideBarOpen}
                handleSidebarToggle={() => setSidebarOpen(!sideBarOpen)}
            />
            <div
                className={
                    classes.mainPanel + ' ' +
                    cx({
                        [classes.mainPanelSidebarMini]: miniActive,
                    })
                }
            >
                <Header
                    miniActive={miniActive}
                    sidebarMinimize={() => setMiniActive(!miniActive)}
                    handleSidebarToggle={() => setMiniActive(!miniActive)}
                />
                <div className={classes.content}>
                    <div className={classes.container}>
                        <BrowserRouter>
                            <Router routes={publicRoutes}/>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;