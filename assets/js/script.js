const chk = document.querySelector("#chk");
const header = document.querySelector(".header");
const label = document.querySelector(".label");
const navList = document.querySelector(".nav-list");
const navBar = document.querySelector(".nav");
const links = document.querySelector(".link-margin-control");
const indexContentSeparator = document.querySelectorAll(".div--separator-content")

function checkDarkMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark", isDarkMode);
    header.classList.toggle("dark-mode", isDarkMode);
    label.classList.toggle("dark-mode", isDarkMode);
    navList.classList.toggle("dark-mode", isDarkMode);
    navBar.classList.toggle("dark-mode", isDarkMode);
    indexContentSeparator.forEach(separator => separator.classList.toggle("dark", isDarkMode));
    toggleTimelineColors(isDarkMode);
    chk.checked = isDarkMode;
}

checkDarkMode();

chk.addEventListener("change", () => {
    const isDarkMode = chk.checked;
    localStorage.setItem("darkMode", isDarkMode);
    checkDarkMode(); 
});

function toggleTimelineColors(isDarkMode) {
    const daysOfWeek = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];
    daysOfWeek.forEach((day) => {
        const elements = document.querySelectorAll(`.timeline-${day}`);
        elements.forEach((element) => {
            element.classList.toggle("dark-mode", isDarkMode);
        });
    });
}

function handleSvgHover(event) {
    const svgPath = event.currentTarget.querySelector('.home-icon path');
    const isHovered = svgPath.classList.contains('hovered');
    if (event.type === 'mouseover' && !isHovered) {
        svgPath.classList.add('hovered');
    } else if (event.type === 'mouseout' && isHovered) {
        svgPath.classList.remove('hovered');
    }
}

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', handleSvgHover);
    link.addEventListener('mouseout', handleSvgHover);
});

const burguer = document.querySelector(".burguer");
const nav = document.querySelector(".nav");

burguer.addEventListener("click", () => nav.classList.toggle("active"));