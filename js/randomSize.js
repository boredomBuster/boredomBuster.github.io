document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hover-text-container");
    
    // Split text into words and wrap each word in a span
    container.innerHTML = container.textContent
        .split(/\s+/) // Split words by spaces
        .map(word => `<span class="hover-text">${word}</span>`) // Wrap each word in a span
        .join(" "); // Join them back with spaces
});
