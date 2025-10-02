function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  }
}

function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.style.display = "none");

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
  }
}
