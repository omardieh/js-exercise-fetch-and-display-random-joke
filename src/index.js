async function fetchJokes() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}

async function displayJokes() {
  const jokes = await fetchJokes();
  const jokeElement = document.createElement("p");
  jokeElement.innerHTML = jokes.setup + " " + jokes.punchline;
  const jokeContainer = document.getElementById("joke-container");
  jokeContainer.appendChild(jokeElement);
}

displayJokes();
