fetch("https://api.goprogram.ai/inspiration")
  .then((response) => response.json())
  .then((data) => console.log(data)); //quote e //author
