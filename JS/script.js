document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  menuOverlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  });

  // Close menu when clicking on menu items
  const menuItems = mobileMenu.querySelectorAll("a");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });
});
