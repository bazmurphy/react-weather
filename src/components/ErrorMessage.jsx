const ErrorMessage = ({currentError}) => {
  console.log(`ErrorMessage function ran`);
  // console.log(`ErrrorMessage currentError`, currentError);

  // API Error Codes
  // HTTP - Status Code - Error code - Description
  // 401 	1002 	API key not provided.
  // 400 	1003 	Parameter 'q' not provided.
  // 400 	1005 	API request url is invalid
  // 400 	1006 	No location found matching parameter 'q'
  // 401 	2006 	API key provided is invalid
  // 403 	2007 	API key has exceeded calls per month quota.
  // 403 	2008 	API key has been disabled.
  // 403 	2009 	API key does not have access to the resource. Please check pricing page for what is allowed in your API subscription plan.
  // 400 	9000 	Json body passed in bulk request is invalid. Please make sure it is valid json with utf-8 encoding.
  // 400 	9001 	Json body contains too many locations for bulk request. Please keep it below 50 in a single request.
  // 400 	9999 	Internal application error.

  return (
    <div id="interaction-error-container">
      <div id="interaction-error-to-user">
        <h4>Error To User:</h4>
        <p>This location could not be found, please try again...</p>
      </div>
      <div id="interaction-error-http-response">
        <h4>Response Status</h4>
        <p>Code: {currentError.response.status}</p>
        <p>Text: {currentError.response.statusText}</p>
      </div>
      <div id="interaction-error-api">
        <h4>API Error</h4>
        <p>Code: {currentError.error.code}</p>
        <p>Message: {currentError.error.message}</p>
      </div>
    </div>
  )
}

export default ErrorMessage;