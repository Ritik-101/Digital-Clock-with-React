import "./Clock.css";
import React, {useEffect, useState} from 'react';

function Clock() {
    const [clockState, setclockState] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setclockState(date.toLocaleTimeString())
        }, 1000);
    }, [])


    return (
        <div>{clockState}</div>
    )
}

export default Clock