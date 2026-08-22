(function() {
    emailjs.init({
        publicKey: "OXFQF2WFK0789kA-I",
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-vivienda');
    const submitBtn = document.getElementById('btn-submit');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const fullName = document.getElementById('nombre').value.trim();
            const cedula = document.getElementById('cedula').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const propiedad = document.getElementById('propiedad').value;
            const fechaInicio = document.getElementById('fechaInicio').value;
            const fechaFin = document.getElementById('fechaFin').value;
            const personas = document.getElementById('personas').value;
            const comentarios = document.getElementById('comentarios').value.trim();

            if (fullName === "" || cedula === "" || correo === "" || telefono === "" || propiedad === "" || fechaInicio === "" || fechaFin === "" || personas === "") {
                alert("Por favor, complete todos los campos obligatorios.");
                return;
            }

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            emailjs.sendForm(
                'service_rkot84d',
                'template_46fzokz',
                this
            )
            .then(() => {
                alert('¡La solicitud se ha enviado correctamente! Nos pondremos en contacto con usted pronto.');
                form.reset();
            })
            .catch((error) => {
                alert('Hubo un error al enviar la solicitud. Inténtelo de nuevo.');
                console.error('FAILED...', error);
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});