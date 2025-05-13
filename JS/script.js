// Get the toggle button and mobile menu elements
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu state variable
let isMenuOpen = false;

// Add event listener to the toggle button
menuToggle.addEventListener("click", () => {
  // Toggle the menu state
  isMenuOpen = !isMenuOpen;

  // Update aria-expanded attribute for accessibility
  menuToggle.setAttribute("aria-expanded", isMenuOpen);

  // Toggle mobile menu visibility with animation
  if (isMenuOpen) {
    // First change the icon to an X
    menuToggle.innerHTML = '<i class="fa-solid fa-times"></i>';

    // Animate the icon with a rotation
    menuToggle.querySelector("i").style.transition = "transform 0.4s ease";
    menuToggle.querySelector("i").style.transform = "rotate(90deg)";

    // Then show the menu with animation
    mobileMenu.classList.add("active");

    // Animate menu items with staggered delay
    const menuItems = mobileMenu.querySelectorAll("a");
    menuItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.3s ease, transform 0.3s ease";

      // Staggered animation for each menu item
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 100 + index * 50);
    });

    // Prevent body scrolling when menu is open
    document.body.style.overflow = "hidden";
  } else {
    // First animate the icon back
    menuToggle.querySelector("i").style.transform = "rotate(0deg)";

    // Animate menu items out
    const menuItems = mobileMenu.querySelectorAll("a");
    menuItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
    });

    // Wait a bit before hiding the menu completely
    setTimeout(() => {
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      mobileMenu.classList.remove("active");

      // Restore body scrolling
      document.body.style.overflow = "";
    }, 300);
  }
});

// Close menu when clicking on a menu item
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Only trigger if menu is open
    if (isMenuOpen) {
      isMenuOpen = false;
      menuToggle.setAttribute("aria-expanded", false);

      // Animate the icon back
      menuToggle.querySelector("i").style.transform = "rotate(0deg)";

      // Wait before changing the icon and hiding the menu
      setTimeout(() => {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }, 300);
    }
  });
});

// Close the menu when user presses Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMenuOpen) {
    isMenuOpen = false;
    menuToggle.setAttribute("aria-expanded", false);

    // Animate the icon back
    menuToggle.querySelector("i").style.transform = "rotate(0deg)";

    // Wait before changing the icon and hiding the menu
    setTimeout(() => {
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    }, 300);
  }
});

// Add updated CSS styles for the mobile menu animations
document.addEventListener("DOMContentLoaded", () => {
  // Add CSS for enhanced animations
  const style = document.createElement("style");
  style.textContent = `
    /* Enhanced mobile menu animations */
    .mobile-menu {
      transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    }
    
    .mobile-menu a {
      position: relative;
      transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s;
    }
    
    /* Menu toggle button animations */
    #menuToggle i {
      transition: transform 0.4s ease;
    }
    
    #menuToggle:hover {
      transform: scale(1.1);
    }
    
    #menuToggle {
      transition: transform 0.2s ease;
    }
    
    /* Animated underline effect for menu items */
    .mobile-menu a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #fdc900;
      transition: width 0.3s ease;
    }
    
    .mobile-menu a:hover::after {
      width: 100%;
    }
    
    /* Make the menu appear with a nice fade */
    .mobile-menu.active {
      opacity: 1;
    }
    
    .mobile-menu {
      opacity: 0.98;
    }
    
    /* Add a subtle scale effect to the menu toggle */
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    #menuToggle.active i {
      animation: pulse 1s infinite;
    }
  `;
  document.head.appendChild(style);
});
