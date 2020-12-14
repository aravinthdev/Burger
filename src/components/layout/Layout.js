import React from 'react';
import classes from './Layout.module.css';
import Auxs from '../../hoc/Auxs'


const layout = (props) =>(
    <Auxs>
        <div>Toolbar,Sidebar,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxs>
);

export default layout;