import React, {useState} from 'react'
import {Drawer, Hidden, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({}))

interface SidebarProps {
    open: boolean;
    handleSidebarToggle: () => void;
}

export default function Sidebar(props: SidebarProps) {
    const [miniActive, setMiniActive] = useState(false);

    return (
        <div>
            <Hidden mdUp>
                <Drawer
                    variant={'temporary'}
                    anchor={'right'}
                    open={props.open}
                    onClose={props.handleSidebarToggle}
                    ModalProps={{keepMounted: true}}
                >
                    some stuff
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    onMouseOver={() => setMiniActive(false)}
                    onMouseOut={() => setMiniActive(true)}
                    anchor={'left'}
                    variant={'permanent'}
                    open
                >
                    some stuff
                </Drawer>
            </Hidden>
        </div>
    )
}