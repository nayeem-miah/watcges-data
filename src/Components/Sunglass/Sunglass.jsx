import React, { useEffect } from 'react';

import './Sunglass.css'  
import Watch from '../Watch/Watch';                                                                                                                                                                                                                                                                                                                            
import { DivedFirstAndSecondNumber as dived, add, multiply } from '../../Uties/Calculate';
// import add from '../../Uties/Calculate';



const Sunglass = () => {
    const first = 30;
    const second = 50;
    const sum = add(first,second);
    const mult = multiply(first , second)
    const div = dived(first ,second)

    useEffect()
    
    return (
        <div>
            
        </div>
    );
};

export default Sunglass;