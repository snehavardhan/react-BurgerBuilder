import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Salad', type: 'salad'}
];

const buildControls = (props) => {
    return(
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(item => (
                <BuildControl 
                    key={item.label} 
                    label={item.label}
                    added = {() => props.ingredientAdded(item.type)} 
                    removed ={()=> props.ingredientRemoved(item.type)}
                    disabled = {props.disabled[item.type]}/>
            ))}
            <button 
            disabled={!props.purchasable}className="OrderButton"
            onClick={props.ordered}>ORDER NOW
            </button>
        </div>
    );
}

export default buildControls;