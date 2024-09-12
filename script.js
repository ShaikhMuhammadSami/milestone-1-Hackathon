// app.ts
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the textarea and toggle button elements
    var skillsFieldset = document.getElementById('skills');
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    // Set initial visibility state
    var skillsVisible = true;
    // Add event listener to the toggle button
    toggleSkillsButton.addEventListener('click', function () {
        skillsVisible = !skillsVisible; // Toggle the visibility state
        if (skillsVisible) {
            skillsFieldset.style.display = 'block'; // Show skills section
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsFieldset.style.display = 'none'; // Hide skills section
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
