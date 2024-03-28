document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modalContainer');
    const openModalButtons = document.querySelectorAll('.form__register-link');
    const closeModalButton = document.querySelector('.close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.showModal();
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.close();
    });
});
