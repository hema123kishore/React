import React from 'react';
import componentB1 from '../componentB1';
import componentB2 from '../componentB2';


export default function componentA() {
    return <div className="componentA">
        <componentB1 />
        <componentB2 />
    </div>
}

    