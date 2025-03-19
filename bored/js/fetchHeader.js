document.addEventListener("DOMContentLoaded", function() {
    fetch("../js/header.html")
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
