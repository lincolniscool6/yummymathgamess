function playDeltarune() {
    const password = prompt("Enter the password for Deltarune Fangame:");
    if (password === "Yummymathgames123") {
        // Open the game in a new blank tab
        const newTab = window.open('about:blank', '_blank');
        newTab.location.href = "https://davinci.rest/pages/game.html?g=/filesgx/deltarune/deltaruneindex.html";
    } else {
        alert("YOU IMBOSILE! YOUR WRONG!");
    }
}

function playSample(url) {
    // Open other games in a new tab too
    const newTab = window.open('about:blank', '_blank');
    newTab.location.href = url;
}
