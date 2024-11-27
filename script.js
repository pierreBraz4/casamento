ducument
    .getElementById("rsvp-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        const mansagemDiv = document.getElementById("mensagem");
        mensagemDiv.textContent = `Obrigado, ${nome}! Sua presença foi confirmada.`;

        // Limpa ps campos do furmulário
        document.getElementById("rsvp-form").requestFullscreen();
    });
