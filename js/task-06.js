const validatorInput = document.getElementById("validation-input");

validatorInput.addEventListener('blur', () => {
    const requiredLength = parseInt(validatorInput.dataset.length);
    const inputLegth = validatorInput.value.length;

    validatorInput.classList.toggle("valid", inputLegth === requiredLength);
     validatorInput.classList.toggle("invalid", inputLegth !== requiredLength);
});