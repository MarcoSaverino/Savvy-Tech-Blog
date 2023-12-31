// Deletes post
async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const userResponse = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (userResponse.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(userResponse.statusText);
  }
}

document.querySelector(".delete-post-btn").addEventListener("click", deleteFormHandler);
