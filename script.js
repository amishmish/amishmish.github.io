function hideSkills() {
    skills = document.getElementById("skills");
    skills.setAttribute("style", "display: none");
}

function pythonbig() {
    python = document.getElementById("python");
    box = document.getElementById("displaySkill");
    text = document.getElementById("pythonText");

    text.setAttribute("class", "show");
    python.setAttribute("class", "skillinDisplay resume");
    box.setAttribute("style", "display: block")

    box.appendChild(python);

    hideSkills();
}