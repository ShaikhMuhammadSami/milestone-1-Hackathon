
document.addEventListener('DOMContentLoaded', () => {
    const skillsFieldset = document.getElementById('skills') as HTMLTextAreaElement;
    const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;

    // Set initial visibility state
    let skillsVisible = true;

    // Add event listener to the toggle button
    toggleSkillsButton.addEventListener('click', () => {
        skillsVisible = !skillsVisible;
        if (skillsVisible) {
            skillsFieldset.style.display = 'block'; 
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsFieldset.style.display = 'none'; 
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});


