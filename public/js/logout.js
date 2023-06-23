async function logout() {
  const userResponse = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
// Redirect the browser to the mainpage
  if (userResponse.ok) {
    document.location.replace("/");
  } else {
    alert(userResponse.statusText);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
