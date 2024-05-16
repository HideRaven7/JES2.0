async function confirmarOperacion() {
    // Utilizamos un Promise para manejar la operación asíncrona
    return new Promise((resolve) => {
        // Mostramos el cuadro de diálogo de SweetAlert2
        Swal.fire({
            html: '<span class="white">"Lo sentimos, parece que el ID o la contraseña ingresados son incorrectos. Por favor, inténtalo de nuevo."</span',
            backdrop: true,
            customClass: {
                popup: 'emergente-class',
                confirmButton: 'confirm-eme',
                container: 'container-eme',
            },
            imageUrl: './imagenes/recursos/logo-jes.png',
            imageWidth: '140px',
            imageHeight: '120px',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            // Resolvemos el Promise con el valor de la acción del usuario
            resolve(result.isConfirmed);
        });
    });
}

// Ejemplo de uso
async function ejecutarOperacion() {
    // Esperamos la confirmación del usuario
    const confirmado = await confirmarOperacion();

    // Verificamos si el usuario confirmó la operación
    if (confirmado) {
        window.location = 'index.html';
        // Aquí puedes agregar el código para realizar la operación
    }
}

// Llamamos a la función para ejecutar la operación
ejecutarOperacion();
