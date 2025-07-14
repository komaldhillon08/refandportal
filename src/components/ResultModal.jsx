// forwardRef it is older verstion 

import { useImperativeHandle ,useRef } from "react";
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ result, targetTime } , ref) {
    let dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
            dialog.current.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog} className="result-modal" >
            <h2>you {result}</h2>
            <p>the target time was <strong>{targetTime} second </strong></p>
            <p> you stoped the timer with<strong>{targetTime}X second left</strong></p>
            <form action="dialog">
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