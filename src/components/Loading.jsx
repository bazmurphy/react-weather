const Loading = () => {
  console.log(`Loading ran`);

  return (
    <div id="loading-container">
      <p id="loading-text">Loading...</p>
      <div id="loading-image-container">
        <img id="loading-image" src="images/loading.svg" alt="loading image" />
      </div>
    </div>
  )
}

export default Loading;