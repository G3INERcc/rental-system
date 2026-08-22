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

            const name = document.getElementById('nombre').value.trim();
            const lastName = document.getElementById('apellidos').value.trim();
            const phone = document.getElementById('telefono').value.trim();
            const email = document.getElementById('correo').value.trim();
            const propertyType = document.getElementById('tipo-vivienda').value.trim();
            const propertyName = document.getElementById('nombre-vivienda').value.trim();
            const description = document.getElementById('descripcion').value.trim();
            const habitations = document.getElementById('habitaciones').value.trim();
            const bathrooms = document.getElementById('banos').value.trim();
            const garage = document.getElementById('cochera').value.trim();
            const airConditioning = document.getElementById('aire-acondicionado').value.trim();
            const price = document.getElementById('precio').value.trim();
            const date = document.getElementById('fecha').value.trim();

            if (name === "" || lastName === "" || phone === "" || email === "" || propertyType === "" || propertyName === "" || description === "" || habitations === "" || bathrooms === "" || garage === "" || airConditioning === "" || price === "" || date === "") {
                alert("Por favor, complete todos los campos obligatorios.");
                return;
            }   

            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;

            emailjs.sendForm(
                'service_rkot84d',
                'template_gqeki6p',
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