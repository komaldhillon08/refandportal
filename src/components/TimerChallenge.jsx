import { useRef, useState } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    // let timer;
    let timer = useRef();

    // setTimeOut function 
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)

        setTimerStarted(true)
    }
    function handleStop() {
        clearTimeout(timer)
    }

    return (
        <>

            {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
            <section className="challenge">
                <h2>{title}</h2>
                {/* {timerExpired && <p>you Lost !</p>} */}
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challeneg</button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time Is Runing .........." : "Time Inactive"}
                </p>
            </section>
        </>
    )
}