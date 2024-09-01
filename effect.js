document.addEventListener("DOMContentLoaded", function () {
    const text = "Your Cue to Tech is coming soon...";
    const speed = 100; // Typing speed in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("welcome-text").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            const cursor = document.getElementById("cursor");
            cursor.textContent = ".";
            cursor.classList.add("blinking-dot");
        }
    }

    typeWriter();
});
