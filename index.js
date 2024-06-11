const userInput = document.querySelector('#user-column');
const results = document.querySelector('#result');
const submitButton = document.querySelector('#submit');
const clearButton = document.querySelector('#clear');
const copyButton = document.querySelector('#copy');

submitButton.addEventListener('click', () => {
    // validate input
    if (userInput.value.trim() === '') {
        alert('Please enter a value');
        // now check that the input does not contain commas
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