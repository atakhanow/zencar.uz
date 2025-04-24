document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  menuOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  });

  // Close menu when clicking on menu items
  const menuItems = mobileMenu.querySelectorAll("a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });
});
