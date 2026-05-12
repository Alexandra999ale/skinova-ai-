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
function closeCookieModal() {
  const modal = document.getElementById("cookieModal");
  if (!modal) return;

  modal.style.display = "none";
  localStorage.setItem("skinovaConsent", "accepted");
}

function rejectOptionalCookies() {
  const modal = document.getElementById("cookieModal");
  if (!modal) return;

  modal.style.display = "none";
  localStorage.setItem("skinovaConsent", "necessary-only");
}

window.addEventListener("load", () => {
  const modal = document.getElementById("cookieModal");
  const consent = localStorage.getItem("skinovaConsent");

  if (modal && !consent) {
    modal.style.display = "flex";
  }
});
function openMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) {
    menu.classList.add("open");
  }
}

function closeMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) {
    menu.classList.remove("open");
  }
}
function fakeLogin(action) {
  const email = document.getElementById("profileEmail");
  const password = document.getElementById("profilePassword");
  const status = document.getElementById("loginStatus");

  if (!email || !password || !status) return;

  if (email.value.trim() === "" || password.value.trim() === "") {
    status.innerHTML = "Completează adresa de e-mail și parola.";
    status.style.display = "block";
    return;
  }

  localStorage.setItem("skinovaUserEmail", email.value.trim());

  status.innerHTML =
    action === "create"
      ? "Cont creat cu succes. Trialul gratuit este activ."
      : "Autentificare reușită. Bine ai revenit!";

  status.style.display = "block";

  setTimeout(() => {
    window.location.reload();
  }, 900);
}

function logoutUser() {
  localStorage.removeItem("skinovaUserEmail");
  window.location.reload();
}

window.addEventListener("load", () => {
  const emailDisplay = document.getElementById("savedEmail");
  const authBox = document.getElementById("authBox");
  const accountBox = document.getElementById("accountBox");
  const savedEmail = localStorage.getItem("skinovaUserEmail");

  if (emailDisplay && authBox && accountBox && savedEmail) {
    emailDisplay.textContent = savedEmail;
    authBox.style.display = "none";
    accountBox.style.display = "block";
  }
});
