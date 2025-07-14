import { useRef, useState } from "react"
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {

    // let timer;
    let timer = useRef();

    // how to use ref 
    let dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsAvtive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open();
    }

    function handleRest() {
        setTimeRemaining(targetTime * 1000)
        
    }

    // setTimeOut function 
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)

        }, 10)

    }
    function handleStop() {
        dialog.current.open();
        clearInterval(timer)
    }

    return (
        <>

            {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost" />} */}
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                result="lost"
                remainingTime={timeRemaining}
                onReset={handleRest}
            />
            <section className="challenge">
                <h2>{title}</h2>
                {/* {timerExpired && <p>you Lost !</p>} */}
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsAvtive ? handleStop : handleStart}>{timerIsAvtive ? "Stop" : "Start"} Challeneg</button>
                </p>
                <p className={timerIsAvtive ? "active" : undefined}>
                    {timerIsAvtive ? "Time Is Runing .........." : "Time Inactive"}
                </p>
            </section>
        </>
    )
}











// import { useRef, useState } from "react"
// import ResultModal from "./ResultModal.jsx";

// export default function TimerChallenge({ title, targetTime }) {
//     const [timerStarted, setTimerStarted] = useState(false)
//     const [timerExpired, setTimerExpired] = useState(false)

//     // let timer;
//     let timer = useRef();

//     // how to use ref
//     let dialog = useRef();

//     // setTimeOut function
//     function handleStart() {
//         timer.current = setTimeout(() => {
//             setTimerExpired(true)
//             // dialog.current.showModal();
//             dialog.current.open();
//         }, targetTime * 1000)

//         setTimerStarted(true)
//     }
//     function handleStop() {
//         clearTimeout(timer)
//     }

//     return (
//         <>

//             {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost" />} */}
//             <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
//             <section className="challenge">
//                 <h2>{title}</h2>
//                 {/* {timerExpired && <p>you Lost !</p>} */}
//                 <p className="challenge-time">
//                     {targetTime} second {targetTime > 1 ? "s" : ""}
//                 </p>
//                 <p>
//                     <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challeneg</button>
//                 </p>
//                 <p className={timerStarted ? "active" : undefined}>
//                     {timerStarted ? "Time Is Runing .........." : "Time Inactive"}
//                 </p>
//             </section>
//         </>
//     )
// }