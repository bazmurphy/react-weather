import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const UserInteraction = ({setLocation, currentError}) => {
  console.log(`UserInteraction ran`);
  
  const [input, setInput] = useState("");
  const [formError, setFormError] = useState(null);

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
            setFormError(null);
            setLocation(input);
            // setInput("");
          }}}
      />
      {(formError || currentError) && <ErrorMessage formError={formError} currentError={currentError}/>}
      <button
        id="interaction-button"
        onClick={() => {
          if (!input) {
            return setFormError("Error: Please enter a location...");
          }
          setFormError(null);
          setLocation(input);
          // setInput("");
        }}>
        Check The Weather
      </button>
    </div>
  );
};

export default UserInteraction;