document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("earthBtn").addEventListener("click", function () {
        gsap.to("body", {
            duration: 1,
            backgroundColor: "green", // Earth color
            ease: "power1.inOut"
        });
    });

    document.getElementById("airBtn").addEventListener("click", function () {
        gsap.to("body", {
            duration: 1,
            backgroundColor: "lightblue", // Air color
            ease: "power1.inOut"
        });
    });

    document.getElementById("fireBtn").addEventListener("click", function () {
        gsap.to("body", {
            duration: 1,
            backgroundColor: "red", // Fire color
            ease: "power1.inOut"
        });
    });

    document.getElementById("waterBtn").addEventListener("click", function () {
        gsap.to("body", {
            duration: 1,
            backgroundColor: "blue", // Water color
            ease: "power1.inOut"
        });
    });
});
