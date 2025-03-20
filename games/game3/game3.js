  const gridContainer = document.getElementById('grid-container');
        const numberOfElements = 100; // Adjust the number of elements as needed

        // Dynamically create elements
        for (let i = 0; i < numberOfElements; i++) {
            const el = document.createElement('div');
            el.classList.add('el'); // Add the class 'el' to each new element
            gridContainer.appendChild(el); // Append the element to the grid container
        }

        const gridElements = document.querySelectorAll('.staggering-grid-demo .el');

        // Mouse move event to track mouse position
        document.addEventListener('mousemove', (event) => {
            const mouseX = event.pageX;
            const mouseY = event.pageY;

            gridElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const elCenterX = rect.left + rect.width / 2;
                const elCenterY = rect.top + rect.height / 2;

                // Calculate distance between the mouse and the center of each element
                const distance = Math.sqrt(Math.pow(elCenterX - mouseX, 2) + Math.pow(elCenterY - mouseY, 2));

                // Calculate scale based on the distance (closer = bigger)
                const scale = Math.max(1 - distance / 500, 0.5);  // Scale will be between 0.5 and 1

                // Apply the animation or transformation based on mouse distance
                el.style.transform = `scale(${scale})`;
                el.style.transition = 'transform 0.1s ease-out';  // Smooth transition for scaling
            });
        });