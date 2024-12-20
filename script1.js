$(document).ready(function () {
    $('#registration-form').on('submit', function (e) {
        let valid = true;

        // Custom validation for demonstration
        $('input, select, textarea').each(function () {
            if ($(this).val().trim() === '') {
                alert('Please fill out the ' + $(this).attr('name') + ' field.');
                valid = false;
                return false;
            }
        });

        // Prevent form submission if invalid
        if (!valid) {
            e.preventDefault();
        }
    });
});
