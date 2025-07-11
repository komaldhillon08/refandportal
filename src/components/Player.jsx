// section 8 and video number 132 

/* import { useState , useRef } from "react";

export default function Player() {

  const [enterRedPlayer , setEnterRedPlayer] = useState("");
  const [submited , setSubmited] = useState(false)

  function handleChange(event) {
    setEnterRedPlayer(event.target.value)
  }
  function handleChick() {
    setSubmited(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submited ? enterRedPlayer : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterRedPlayer}/>
        <button onClick={handleChick}>Set Name</button>
      </p>
    </section>
  );
}
 */


// section 8 and video number 134
// how to use useRef hook in react  


import { useState , useRef } from "react";

export default function Player() {

  const [enterRedPlayer , setEnterRedPlayer] = useState("");
  const [submited , setSubmited] = useState(false)

  function handleChange(event) {
    setEnterRedPlayer(event.target.value)
  }
  function handleChick() {
    setSubmited(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submited ? enterRedPlayer : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterRedPlayer}/>
        <button onClick={handleChick}>Set Name</button>
      </p>
    </section>
  );
}
