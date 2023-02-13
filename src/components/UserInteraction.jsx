import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const UserInteraction = ({setLocation, currentError}) => {
  console.log(`UserInteraction ran`);
  
  const [input, setInput] = useState("");

  return (
    <div id="interaction">
      <input 
        type="text"
        id="interaction-input"
        placeholder="Enter a location..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if(event.key === "Enter") {
            setLocation(input);
            // setInput("");
          }}}
      />
      {currentError && <ErrorMessage currentError={currentError}/>}
      <button
        id="interaction-button"
        onClick={() => {
          setLocation(input);
          // setInput("");
        }}>
        Check The Weather
      </button>
    </div>
  );
};

export default UserInteraction;