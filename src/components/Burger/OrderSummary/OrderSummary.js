import React from 'react'
import Auxs from '../../../hoc/Auxs'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>(
        <li key={igKey}>{igKey}:{props.ingredients[igKey]}</li>
    ))
    return(
        <Auxs>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            
        </Auxs>
    )
}
    


export default orderSummary