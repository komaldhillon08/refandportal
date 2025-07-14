export default function ResultModal({ result , targetTime}) {
    return (
     <dialog className="result-modal" open>
        <h2>you {result}</h2>
        <p>the target time was <strong>{targetTime} second </strong></p>
        <p> you stoped the timer with<strong>{targetTime}X second left</strong></p>
        <form action="dialog">
            <button>Close</button>
        </form>
     </dialog>
    )
}