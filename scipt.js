document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const members = document.querySelectorAll(".member");

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    members.forEach(member => {
      const nickname = member.dataset.nickname.toLowerCase();
      // hanya tampilkan member yang mengandung query
      if (query === "" || nickname.includes(query)) {
        member.style.display = "block";
      } else {
        member.style.display = "none";
      }
    });
  });
});
