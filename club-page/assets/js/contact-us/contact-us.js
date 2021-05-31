$(document).ready(function () {
    const valid = $("input,textarea").not("[type=button]").jqBootstrapValidation();

    $('.contact-us-container form button').click(() => {
        if(valid[0].validity.valid && valid[1].validity.valid && valid[2].validity.valid && valid[3].validity.valid) {
            Swal.fire({
                title: 'Successfull',
                text: 'Your message has been received',
                icon: 'success',
                confirmButtonText: 'Confirm'
            }).then(() => location.reload());
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill the form correctly',
                icon: 'error',
                confirmButtonText: 'Confirm'
            });
        }
    });
});