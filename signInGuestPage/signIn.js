const loginSection = document.getElementById("login-section");
const loginButton = document.getElementById("login-button");
const welcomeSection = document.getElementById("welcome");
// adding event listener for the login button, and defining the function that will respond to the event
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  // find and store the login form input
  const usernameInput = document.getElementById("username");
  const userTypeInput = document.getElementById("userType");
  // check if the input has a value or give it a default value
  const username = usernameInput?.value || "";
  const userType = userTypeInput?.value || "";
  // if the user didn't enter his username print the alert message
  if (!username) {
    alert("Please enter your username!");
    return;
  }
  if (!userType) {
    alert("Please enter your user type!");
    return;
  }
  const user = {
    username,
    userType,
  };
  // store the input value in local storage
  localStorage.setItem("user", JSON.stringify(user));
  // find and store the welcome message
  const welcomeMessage_h2 = document.getElementById("user-name");
  const welcomeMessage = welcomeMessage_h2?.innerHTML || "";
  // adding the username to the welcome message
  welcomeMessage_h2.innerHTML = `${welcomeMessage} ${username}!`;
  // hide  the login section
  loginSection.style.display = "none";
  // show the welcome section
  welcomeSection.style.display = "block";
});
