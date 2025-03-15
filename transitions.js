document.addEventListener("DOMContentLoaded", () => {
    console.log("Seamless Transitions Page Loaded");

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("play", () => {
            console.log(`Playing: ${video.currentSrc}`);
        });

        video.addEventListener("pause", () => {
            console.log(`Paused: ${video.currentSrc}`);
        });

        video.addEventListener("ended", () => {
            console.log(`Finished: ${video.currentSrc}`);
        });
    });
});
