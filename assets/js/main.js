const toggleBtn = document.querySelector(".toggle-btn");
const menuMobile = document.querySelector(".menu-mobile");

toggleBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("off");
});
