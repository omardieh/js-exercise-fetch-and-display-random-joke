 function fetchJokes() {
  const apiUrl = "https://official-joke-api.appspot.com/random_joke";
  return fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
  .then(jsonResponse => {
    return jsonResponse;
  })
  .catch( (err) => {
    console.log("Error Fetching Joke:", error);
    throw error;
  })
}
async function displayJokes() {
  try {
    const jokeContainer = document.getElementById("joke-container");
    const jokeSetup = document.createElement ("p");
    const firstjokes = document.createElement ("p");
    const jokeData = await fetchJokes();

    jokeSetup.innerHTML = jokeData.setup;
    firstjokes.innerHTML = jokeData.punchline;
    jokeContainer.appendChild(jokeSetup);
    setTimeout(() => jokeContainer.appendChild(firstjokes),2000);

  } catch (error) {
    console.log("Error displaying jokes:", error);
  }
}
displayJokes();

// don't forget to invoke the function :
// displayJokes()
