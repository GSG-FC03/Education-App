const loginUser = (e = window.event) => {
  e.preventDefault();
  const usernameInput = document.getElementById("username");
  const userTypeInput = document.getElementById("userType");

  if (usernameInput.value === "" || userTypeInput.value === "") {
    alert("Please inter your username!");
  }

  const user = {
    username: usernameInput.value,
    userType: userTypeInput.value,
  };

  window.localStorage.setItem("user", JSON.stringify(user));
};
