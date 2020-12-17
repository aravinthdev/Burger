import React, { Component } from 'react';
import Classes from './BurgerIncredient.module.css';
import PropTypes from "prop-types";

class BurgerIncredient extends Component {
    render() {
        let ingcredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingcredient = <div className={Classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingcredient = (
                    <div className={Classes.BreadTop}>
                        <div className={Classes.Seed1}></div>
                        <div className={Classes.Seed2}></div>
                    </div>
                );
                break;
            case ('Meat'):
                ingcredient = <div className={Classes.Meat}></div>;
                break;
            case ('Bacon'):
                ingcredient = <div className={Classes.Bacon}></div>;
                break;
            case ('Salad'):
                ingcredient = <div className={Classes.Salad}></div>;
                break;
            case ('Cheese'):
                ingcredient = <div className={Classes.Cheese}></div>;
                break;
            default:
                ingcredient = null;
               
        }
        return ingcredient;
    }
}

BurgerIncredient.propTypes{
    type:PropTypes.string.isRequired
}
export default BurgerIncredient;