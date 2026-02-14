document.addEventListener("DOMContentLoaded", () => {

    // Form Handling
    const form = document.getElementById("talkto-form");
    const successPanel = document.getElementById("success-message");
    const container = document.querySelector(".main-container");

    const submitButton = form.querySelector('button[type="submit"]');

    /*
    // AJAX disabled temporarily for activation
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Add loading state
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = "ENVOI EN COURS...";
        submitButton.style.transform = "scale(0.98)";
        submitButton.disabled = true;

        const formData = new FormData(form);

        // Use FormSubmit.co AJAX endpoint
        fetch("https://formsubmit.co/ajax/llecalvez@eugeniaschool.com", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Success animation
                form.style.opacity = "0";
                form.style.pointerEvents = "none";

                // Show Success Panel
                successPanel.classList.remove("hidden");
                // Trigger reflow
                void successPanel.offsetWidth;
                successPanel.classList.add("visible");
            })
            .catch(error => {
                console.error('Error:', error);
                submitButton.innerHTML = "OUPS... ERREUR !";
                submitButton.style.background = "#ff4d4d";
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.transform = "scale(1)";
                    submitButton.style.background = ""; // Restore original
                }, 3000);
            });
    });
    */

    // Optional: Add random rotation to form elements on load for "messy desk" feel
    const inputs = document.querySelectorAll('.form-group');
    inputs.forEach((input, index) => {
        const randomRot = (Math.random() - 0.5) * 2; // -1 to 1 deg
        input.style.transform = `rotate(${randomRot}deg)`;
    });

    // Generate Floating Mascots (Petit Bonhomme Jaune)
    const mascotUrl = "petit bonhomme jaune.png";
    const mascotCount = 40; // Beaucoup plus de bonhommes !

    for (let i = 0; i < mascotCount; i++) {
        const img = document.createElement("img");
        img.src = mascotUrl;
        img.classList.add("floating-mascot");

        // Position aléatoire dispersée
        img.style.left = Math.random() * 100 + "%";
        img.style.top = Math.random() * 100 + "%";

        // Random usage: taille plus variée (petits et moyens)
        const rot = (Math.random() - 0.5) * 60; // Rotation plus marquée
        const scale = 0.4 + Math.random() * 0.6; // De 0.4 à 1.0
        img.style.transform = `rotate(${rot}deg) scale(${scale})`;

        // Opacité aléatoire pour la profondeur
        img.style.opacity = 0.2 + Math.random() * 0.6; // 0.2 à 0.8

        document.body.appendChild(img);

        // Parallax effect
        const speed = (i % 5) + 1; // Vitesse variable
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * speed) / 200;
            const y = (window.innerHeight - e.pageY * speed) / 200;
            img.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${scale})`;
        });
    }
});
