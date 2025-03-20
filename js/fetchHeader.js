console.log("Fetch header loaded")

document.addEventListener("DOMContentLoaded", function () {
    const paths = [
        { url: "../js/header.html", placeholder: "header-placeholder" },
        { url: "../../js/header.html", placeholder: "header-placeholder" } // Add another path here
    ];

    paths.forEach(path => {
        fetch(path.url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(path.placeholder).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${path.url}:`, error));
    });
});
