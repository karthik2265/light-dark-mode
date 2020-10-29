const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch theme Dynamically
function switchTheme(event) {

    console.log(event.target.checked);
    // check if theme switch button is pressed then change to dark theme
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme);