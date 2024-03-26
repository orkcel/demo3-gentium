// WAITING TO HTML LOAD
document.addEventListener("DOMContentLoaded", () => {
  const MOBILE_BUTTON = document.getElementById("mobileButton");
  const MOBILE_MENU = document.getElementById("mobileMenu");
  const MOBILE_CLOSE = document.getElementById("mobileClose");

  MOBILE_BUTTON.addEventListener("click", () => {
    MOBILE_MENU.classList.add("mobile-menu-active");
    MOBILE_CLOSE.addEventListener("click", () => {
      MOBILE_MENU.classList.remove("mobile-menu-active");
    });
  });
});
