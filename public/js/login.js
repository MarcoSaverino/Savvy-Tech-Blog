//login 
async function loginFormHandler(event) {
  event.preventDefault();
  // Collect values from login 
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const userResponse = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
// Redirect the browser to the dashboard 
    if (userResponse.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(userResponse.statusText);
    }
  }
}

document.querySelector("#login-form").addEventListener("submit", loginFormHandler);
