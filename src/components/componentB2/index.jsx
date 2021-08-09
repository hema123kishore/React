import React from 'react';
import componentC1 from '../componentC1';
import componentC2 from '../componentC2';



export default function componentB2() {
    return <div className="componentB2">
        <componentC1 />
        <componentC2 />
    </div>
}
