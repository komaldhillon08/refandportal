import Player from './components/Player.jsx';
 import TimerChallenge from './components/TimerChallenge.jsx';
function App() {


  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5}/>
        <TimerChallenge title="Getting tough" targetTime={10}/>
        <TimerChallenge title="Prop only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
