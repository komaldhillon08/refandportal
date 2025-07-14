// forwardRef it is older verstion 

import { useImperativeHandle ,useRef } from "react";
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ onReset, targetTime , remainingTime } , ref) {

    let dialog = useRef();
    let userLost = remainingTime <= 0;
    let formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / ( targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
            dialog.current.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal" >
            {userLost && <h2>you lost !</h2> }
            {!userLost && <h2>you score {score}!</h2> }
            
            <p>the target time was <strong>{targetTime} second </strong></p>
            <p> you stoped the timer with<strong> {formattedRemainingTime} X second left</strong></p>
            <form action="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal

/* export default function ResultModal({ ref, result, targetTime }) {
    return (
        <dialog ref={ref} className="result-modal" >
            <h2>you {result}</h2>
            <p>the target time was <strong>{targetTime} second </strong></p>
            <p> you stoped the timer with<strong>{targetTime}X second left</strong></p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
} */