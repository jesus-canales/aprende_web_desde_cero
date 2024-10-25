document.querySelector(".menu-icon").addEventListener("click", function() {
    const menu = document.querySelector("nav ul");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
