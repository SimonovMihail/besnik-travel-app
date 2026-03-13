let emailInputGlobalValue = '';

export function initEmailField() {
    const inputElement = document.querySelector('[data-js-bottom-email-input]');

    inputElement.addEventListener('input', () => {
        emailInputGlobalValue = inputElement.value;
    })
    
    const buttonElement = document.querySelector('[data-js-bottom-email-input-button]');

    buttonElement.addEventListener('click', () => {
        if (emailInputGlobalValue === '') {
            alert("ВЫ НЕ ВВЕЛИ ПОЧТУ!!!");
        } else {
            alert(`ВЫ ВВЕЛИ ПОЧТУ: ${emailInputGlobalValue}`);
        }
    })
}