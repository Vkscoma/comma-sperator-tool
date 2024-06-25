const userInput = document.querySelector('#user-column');
const results = document.querySelector('#result');
const submitButton = document.querySelector('#submit');
const clearButton = document.querySelector('#clear');
const copyButton = document.querySelector('#copy');
const openModal = document.querySelector('#open--modal');
const closeModal = document.querySelector('#close--modal');
const modal = document.querySelector('.modal');


openModal.addEventListener('click', () => {
    if (!modal.attributes[1]) {
        modal.showModal();
    }
});

closeModal.addEventListener('click', () => {
    modal.close();
});

submitButton.addEventListener('click', () => {
    if (userInput.value.trim() === '') {
        alert('Please enter a value');
    } else if (userInput.value.includes(',')) {
        alert('Please enter a value without commas');
    } else {
        addCommasToInput();
    }
});

clearButton.addEventListener('click', () => {
    userInput.value = '';
    results.value = '';
});

copyButton.addEventListener('click', copyResults);

function addCommasToInput() {
    const input = userInput.value.trim();
    const outputResult = input.split(/\s+/).join(', ');
    outputResult.replace(/,/g, ',\n');
    results.value = outputResult;
}

function copyResults() {
    if (results.value) {
        navigator.clipboard.writeText(results.value).then(() => {
            alert('Results copied to clipboard');
        }).catch((err) => {
            alert('Failed to copy results', err);
        });
    } else {
        alert('There is nothing to copy');
    }
}