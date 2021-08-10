const loginSection = document.getElementById("login-section");
const loginButton = document.getElementById("login-button");
const welcomeSection = document.getElementById("welcome");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("username");
  const userTypeInput = document.getElementById("userType");
  const username = usernameInput?.value || "";
  const userType = userTypeInput?.value || "";
  if (!username) {
    alert("Please inter your username!");
    return;
  }
  if (!userType) {
    alert("Please inter your user type!");
    return;
  }
  const user = {
    username,
    userType,
  };

  localStorage.setItem("user", JSON.stringify(user));
  const welcomeMessage_h2 = document.getElementById("user-name");
  const welcomeMessage = welcomeMessage_h2?.innerHTML || "";
  welcomeMessage_h2.innerHTML = `${welcomeMessage} ${username}!`;
  loginSection.style.display = "none";
  welcomeSection.style.display = "block";
});
