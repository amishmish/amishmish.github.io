function smallall() {
    const treasure = document.getElementById("gold");
    for (const coin of treasure.children) { 
        coin.style.width = '15%';
        coin.class = "skill hiddenskill resume"

        const text = document.getElementById(coin.id + "Text");
        if (text) {
            text.style.display = "none";
        }
    }
}

function skillbig(elementid) {
    const skill = document.getElementById(elementid);
    const text = document.getElementById(elementid + "Text");

    smallall();
    skill.setAttribute("style", "display: inline-block")
    text.setAttribute("style", "display: block")


    text.setAttribute("class", "showText");
    skill.setAttribute("class", "skillCOPY skillinDisplay resume");
}
