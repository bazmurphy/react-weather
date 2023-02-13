const ErrorMessage = (props) => {
  console.log(`ErrorMessage function ran`);
  return (
    <div id="interaction-error-container">
      {props.errorOccurred ? <p id="interaction-error">Error, could not find that location... Please try again...</p> : <p></p>}
    </div>
  )
}

export default ErrorMessage;