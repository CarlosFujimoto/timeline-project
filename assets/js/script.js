const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    toggleTimelineColors()
})

function toggleTimelineColors() {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    daysOfWeek.forEach(day => {
        const elements = document.querySelectorAll(`.timeline-${day}`);
        elements.forEach(element => {
            element.classList.toggle('dark-mode'); 
        });
    });
}