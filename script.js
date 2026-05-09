function startAnalysis() {
  const loading = document.getElementById("loading");
  const results = document.getElementById("results");

  if (!loading || !results) return;

  results.style.display = "none";
  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";
    results.style.display = "block";
  }, 1800);
}

function scanIngredients() {
  const result = document.getElementById("ingredientResult");
  if (!result) return;

  result.style.display = "block";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chat = document.getElementById("chatBox");

  if (!input || !chat || input.value.trim() === "") return;

  const userBubble = document.createElement("div");
  userBubble.className = "bubble user";
  userBubble.textContent = input.value;
  chat.appendChild(userBubble);

  const aiBubble = document.createElement("div");
  aiBubble.className = "bubble ai";
  aiBubble.textContent =
    "Am înțeles. Pe baza informațiilor introduse, recomand ajustarea treptată a rutinei și evitarea combinării mai multor ingrediente active în aceeași seară.";
  chat.appendChild(aiBubble);

  input.value = "";
}
