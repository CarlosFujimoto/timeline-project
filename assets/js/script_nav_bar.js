const burguer = document.querySelector(".burguer");
const nav = document.querySelector(".nav");

burguer.addEventListener("click", () => nav.classList.toggle("active"));