// Adds post
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="content"]').value;

  if (title && content) {
    const userResponse = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (userResponse.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(userResponse.statusText);
    }
  }
}

document.querySelector("#add-post-form").addEventListener("submit", newFormHandler);
