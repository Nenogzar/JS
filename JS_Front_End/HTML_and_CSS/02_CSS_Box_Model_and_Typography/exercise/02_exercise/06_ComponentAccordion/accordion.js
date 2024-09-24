document.querySelectorAll(".accordion-heading").forEach((heading) => {
    heading.addEventListener("click", () => {
        const panel = heading.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
