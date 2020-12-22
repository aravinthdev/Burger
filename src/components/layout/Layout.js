import React from 'react';
import classes from './Layout.module.css';
import Auxs from '../../hoc/Auxs'
import Toolbar from '../Navigation/Toolbar/Toolbar'


const layout = (props) =>(
    <Auxs>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxs>
);

export default layout;