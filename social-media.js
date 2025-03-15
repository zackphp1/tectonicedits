document.addEventListener("DOMContentLoaded", () => {
    console.log("Social Media Optimization Page Loaded");

    const tips = document.querySelectorAll(".tip");

    tips.forEach(tip => {
        tip.addEventListener("click", () => {
            alert(`More info about: ${tip.textContent}`);
        });
    });
});
