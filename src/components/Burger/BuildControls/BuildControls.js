import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <BuildControl />
    </div>
)
    

export default BuildControls;