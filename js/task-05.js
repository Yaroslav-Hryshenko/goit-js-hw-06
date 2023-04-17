// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// nameInput.addEventListener('input', () => {
//     nameOutput.textContent = nameInput.value || "Anonymous";
// });

const refs = {
    nameInput: document.getElementById("name-input"),
    nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener("input", onInputName);

function onInputName(event) {
    refs.nameOutput.textContent = event.currentTarget.value || "Anonymous";
   
}