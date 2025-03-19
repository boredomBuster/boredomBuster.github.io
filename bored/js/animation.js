let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");

gsap.fromTo(".box", 
  {
    opacity: 0, 
    scale: 2, 
    y: 50, 
    rotation: -180,
    ease: "back.out(1.7)" // For a more natural animation easing
  },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    rotation: 0,
    stagger: 0.2, // Stagger the animation for each letter
    duration: 1,
    delay: 0.5, // Optional delay before starting the animation
    onComplete: () => {
        // Moving each box in different directions
        gsap.to(b1, {
            x: window.innerWidth,
            y: window.innerHeight,
            duration: 0.5,
        });
        gsap.to(b2, {
            x: -window.innerWidth,
            y: -window.innerHeight,
            duration: 0.5, 
        });
        gsap.to(b3, {
            x: -window.innerWidth,
            y: window.innerHeight,
            duration: 0.5,
        });
        gsap.to(b4, {
            x: window.innerWidth,
            y: -window.innerHeight, 
            duration: 0.5,
        });
        gsap.to(b5, {
            x: window.innerWidth,
            y: window.innerHeight,
            duration: 0.5,  
            onComplete: () => {
                // Hide the animation container and show the real content
                gsap.to(".container", {
                    opacity: 0,
                    duration: 0.1,
                    onComplete: () => {
                        document.querySelector(".container").style.display = "none"; // Hide container after the fade
                        document.querySelector("#hiddenMainPage").style.display = "block"; // Show the real content
                    }
                });
            }
        });
    }
  }
);

console.log("animation loaded");
