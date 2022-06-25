import { useState } from "react";
function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [active, setActive] = useState(false);

  while (active) {
    setTimeout(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
      if (minutes === 59) {
        setMinutes(0);
        setHours(hours + 1);
      }
    }, 1000);
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="rounded-lg bg-blue-200 px-16 py-8 flex justify-center items-center flex-col space-y-4">
        {/* Timer */}
        <div>
          {hours}:{minutes}:{seconds}
        </div>
        {/* Buttons */}
        <div className="flex justify-around w-full items-center space-x-2">
          <button
            className="px-2 py-1 bg-white rounded-md"
            onClick={() => {
              setActive(true);
            }}
          >
            Start
          </button>
          <button
            className="px-2 py-1 bg-white rounded-md"
            onClick={() => {
              setActive(false);
            }}
          >
            Pause
          </button>
          <button
            className="px-2 py-1 bg-white rounded-md"
            onClick={() => {
              setHours(0);
              setMinutes(0);
              setSeconds(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
