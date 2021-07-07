import React, {useState} from 'react'

export default function Counter() {
    const [score, setScore] = useState(0)
    function click(){
         setScore( score +1)
    }
    return (
        <>
            <button onClick={click}>Cliqué {score} fois</button>
        </>
    )
}
