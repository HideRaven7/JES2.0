const menu = document.querySelector('.menu');

menu.addEventListener('click',() => {
    Swal.fire({
        html: '<ul class="menu-navegador-eme"><li class="li-eme"><a class="a-eme">Configuraci&oacute;n</a></li><li class="li-eme"><a class="a-eme">Reporte</a></li><li class="li-eme"><a class="a-eme">Cerrar</a></li></ul>',
        backdrop: true,
        customClass: {
            popup: 'emergente-class classes-eme',
            confirmButton: 'confirm-eme',
            container: 'container-eme conta-eme'
        },
        buttonsStyling: false,
        showCloseButton: false,
        // closeButtonAriaLabel: "cerrar",
        allowOutsideClick: true,
        confirmButtonText: "Aceptar",
        showConfirmButton: false,
        position: 'top-right',
        // grow: 'column'
    });
});