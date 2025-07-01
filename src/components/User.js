import React, { useState } from 'react'

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    return (
        <div className='user-card'>
            <h4>Functional</h4>
            <h4>Count: {count}</h4>
            <button onClick={() => { setCount(count + 1) }}>Count Increase</button>
            <h5>Name: {name}</h5>
            <h5>Location: {location}</h5>
            <h5>Email: chaitali@abc.com</h5>
        </div>
    )
}

export default User