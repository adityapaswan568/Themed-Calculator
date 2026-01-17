const result = document.getElementById('result');
const themeColorPicker = document.getElementById('theme-color');
const calculator = document.querySelector('.calculator');

function appendCharacter(char) {
    result.value += char;
}

function clearScreen() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Replace the % operator with /100 for proper percentage calculation
        let expression = result.value.replace(/%/g, '/100');
        result.value = eval(expression);
    } catch (error) {
        result.value = 'Error';
    }
}

// Update theme color when color picker changes
themeColorPicker.addEventListener('input', (e) => {
    const color = e.target.value;
    document.documentElement.style.setProperty('--theme-color', color);
    // Create a lighter version of the selected color for the background
    document.body.style.backgroundColor = `${color}22`; // 22 is hex for 13% opacity
});

// Set initial theme color
document.documentElement.style.setProperty('--theme-color', themeColorPicker.value);
document.body.style.backgroundColor = `${themeColorPicker.value}22`;
