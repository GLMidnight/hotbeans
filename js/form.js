document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('applicationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const applicationData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            position: formData.get('position'),
            introduction: formData.get('introduction')
        };

        console.log('Application Data:', applicationData);

        form.reset();
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });
});
