const toggleBtn = document.querySelector(".toggle-btn");
const menuMobile = document.querySelector(".menu-mobile");
const toggleIcon = document.querySelector(".bi-list");

toggleBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("off");

    toggleIcon.classList.toggle("bi-list");
    toggleIcon.classList.toggle("bi-x-lg");
});
