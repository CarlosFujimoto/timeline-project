const chk = document.getElementById("chk");
const header = document.querySelector(".header");
const label = document.querySelector(".label");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".link-margin-control")

function checkDarkMode() {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark");
      header.classList.add("dark-mode");
      label.classList.add("dark-mode");
      navList.classList.add("dark-mode");
      
      document.querySelectorAll('.nav-list a').forEach((button) => {
          button.classList.add('dark-mode');
      });
      toggleTimelineColors();
      chk.checked = true;
    } else {
      chk.checked = false;
    }
}
checkDarkMode();

chk.addEventListener("change", () => {
  const isDarkMode = chk.checked;
  localStorage.setItem("darkMode", isDarkMode);
  document.body.classList.toggle("dark");
  header.classList.toggle("dark-mode");
  label.classList.toggle("dark-mode");
  navList.classList.toggle("dark-mode");
  toggleTimelineColors();
});

function toggleTimelineColors() {
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
      element.classList.toggle("dark-mode");
    });
  });
}

function handleSvgHover(event) {

    const svgPath = event.currentTarget.querySelector('.home-icon path');

    const isHovered = svgPath.classList.contains('hovered');

    if (event.type === 'mouseover' && !isHovered) {
        svgPath.classList.add('hovered');
    } 

    else if (event.type === 'mouseout' && isHovered) {
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