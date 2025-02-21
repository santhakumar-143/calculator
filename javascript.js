document.addEventListener("DOMContentLoaded", () => {
    const toggleParagraph = document.getElementById("toggleparagraph"); // Corrected ID
    const toggleHeading = document.querySelector(".header h1"); // Select the header to toggle

    if (toggleHeading && toggleParagraph) {
        toggleHeading.addEventListener("click", () => {
            if (toggleParagraph.style.display === "none" || toggleParagraph.style.display === "") {
                toggleParagraph.style.display = "block";
            } else {
                toggleParagraph.style.display = "none";
            }
        });
    }
});
