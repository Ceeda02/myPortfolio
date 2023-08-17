// Array of roles to rotate
const roles = ["Frontend Engineer", "Student Programmer", "Creative Coder"];

// Function to rotate roles
function rotateRoles() {
  const roleElement = document.querySelector(".portfolio-role");
  let currentIndex = 0;

  function updateRole() {
    roleElement.classList.add("fade-out"); // Add the fade-out class
    setTimeout(() => {
      roleElement.textContent = roles[currentIndex];
      roleElement.classList.remove("fade-out"); // Remove the fade-out class
      currentIndex = (currentIndex + 1) % roles.length;
    }, 500); // Delay for animation before changing the role
  }

  setInterval(updateRole, 2500); // Switch every 2.5 seconds
}

// Call the role rotation function
rotateRoles();

//techstack hover
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
