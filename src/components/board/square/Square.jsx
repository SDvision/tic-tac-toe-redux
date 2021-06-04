import React from 'react';
import Cross from './cross/Cross.jsx'
import Zero from './zero/Zero.jsx'
function Square(props){
    return (
        <div className="cell">
            {props.seq%2===0?<Cross />:<Zero />} 
        </div>
    )
}
export default Square;