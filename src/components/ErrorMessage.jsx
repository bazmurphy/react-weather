const ErrorMessage = ({formError, currentError}) => {
  console.log(`ErrorMessage ran`);
  // console.log(`ErrrorMessage formError`, formError);
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
      {formError &&   
        <div id="interaction-error-form">
          <span id="interaction-error-form-title">Error: </span>
          <span id="interaction-error-form-message">Please enter a location...</span>
        </div>
      }
      {currentError && 
        <div id="interaction-error-request">
          <div id="interaction-error-to-user">
            <span id="interaction-error-to-user-title">Error: </span>
            <span id="interaction-error-to-user-message">This location could not be found, please try again...</span>
          </div>
          <div id="interaction-error-http-response">
            <p id="interaction-error-http-response-title">Response Status:</p>
            <p id="interaction-error-http-response-code">Code: {currentError.response.status}</p>
            <p id="interaction-error-http-response-text">Text: {currentError.response.statusText}</p>
          </div>
          <div id="interaction-error-api">
            <p id="interaction-error-api-title">API Error:</p>
            <p id="interaction-error-api-code">Code: {currentError.error.code}</p>
            <p id="interaction-error-api-message">Message: {currentError.error.message}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default ErrorMessage;