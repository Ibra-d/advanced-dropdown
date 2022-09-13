document.addEventListener("click", function (e) {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  let dropdown = document.querySelectorAll("[data-dropdown].active");

  dropdown.forEach((e) => {
    if (e === currentDropdown) return;
    e.classList.remove("active");
    const input = document.querySelectorAll("input");
    input.forEach((e) => {
      e.value = "";
    });
  });
});
