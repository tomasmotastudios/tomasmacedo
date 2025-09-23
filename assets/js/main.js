document.addEventListener("DOMContentLoaded", () => {
    // Highlight current page
    document.querySelectorAll("header nav a").forEach(link => {
        if (link.href === window.location.href) link.classList.add("active");
    });

    // Dynamic year
    document.querySelectorAll(".year").forEach(span => {
        span.textContent = new Date().getFullYear();
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Fecha menu ao clicar em qualquer link
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
});
