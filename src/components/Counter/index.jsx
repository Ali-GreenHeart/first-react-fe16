import { useState } from "react"
// import "./style.css"
import "./style.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1 className={"counter"}>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >increase</button>
            <button
                // className={styles.alibaba}
                onClick={() => {
                    setCount(count - 1)
                }}
            >decrease</button>
            <button
                onClick={() => {
                    setCount(0)
                }}
            >reset</button>
            <button
                onClick={() => {
                    let ed = +prompt('ededi daxil edin')
                    setCount(ed)
                }}
            >special</button>
            <button
                onClick={() => {
                    console.log(count)
                }}
            >console</button>
        </>
    )
}

export default Counter;
