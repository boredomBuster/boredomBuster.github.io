document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hover-text-container");
    
    // Split text into words and wrap each word in a span
    container.innerHTML = container.textContent
        .split(/\s+/) // Split words by spaces
        .map(word => `<span class="hover-text">${word}</span>`) // Wrap each word in a span
        .join(" "); // Join them back with spaces
});

// document.querySelectorAll('.hover-text').forEach(word => {
//     word.addEventListener('mouseenter', () => {
//         // Generate a random font size between 30px and 100px
//         let randomSize = Math.floor(Math.random() * 71) + 30; // Random size between 30px and 100px
//         word.style.fontSize = randomSize + 'px';
//     });

//     word.addEventListener('mouseleave', () => {
//         // Reset the font size when the mouse leaves
//         word.style.fontSize = '20px'; // Reset to initial size
//     });
// });