//Signups
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const userResponse = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (userResponse.ok) {
      console.log("success");

      document.location.replace("/dashboard");
    } else {
      alert(userResponse.statusText);
    }
  }
}

document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);
