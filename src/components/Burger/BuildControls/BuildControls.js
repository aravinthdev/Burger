import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    { label:'Salad' , type: 'salad'},
    { label:'Meat' , type: 'meat'},
    { label:'Becon' , type: 'becon'},
    { label:'Cheese' , type: 'cheese'}
    
]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
)
    

export default BuildControls;