const fonts = ["Arial", "Cambria", "Times New Roman"];
const themes = ["solarized-dark.css", "solarized-light.css"]

const themeStylesheet = document.getElementById("themeStylesheet");
const themeSelectors = document.getElementsByName("theme-select");
const fontSelectors = document.getElementsByName("font-select");

// Utility Functions

function setSelectorValueFromStorage(selectors, savedValue) {
    Array.from(selectors).forEach(selector => {
        selector.value = savedValue;
    });
}

function getPathPrefix() {
    return window.location.pathname === "/" || window.location.pathname.startsWith("/index.html") ? "." : "..";
}

// Change Theme
function changeTheme(themeIndex) {
    themeStylesheet.setAttribute('href', `/assets/styles/${themes[themeIndex]}`);
    setSelectorValueFromStorage(themeSelectors, themeIndex);
    localStorage.setItem("theme", themeIndex)
}

// Change Font
function changeFont(fontIndex) {
    const selectors = document.getElementsByClassName("setting-select");

    const newFont = fonts[fontIndex] + ", Arial";
    document.body.style.fontFamily = newFont;
    
    Array.from(selectors).forEach(element => {
        element.style.fontFamily = newFont;
    });

    setSelectorValueFromStorage(fontSelectors, fontIndex);
    localStorage.setItem("font", fontIndex);
}

// Set font and theme from local storage
document.addEventListener("DOMContentLoaded", () => {
    const savedThemeIndex = localStorage.getItem("theme");
    const savedFontIndex = localStorage.getItem("font");

    if (savedThemeIndex !== null && themes[savedThemeIndex]) {
        changeTheme(savedThemeIndex);
        setSelectorValueFromStorage(themeSelectors, savedThemeIndex);
    }

    if (savedFontIndex !== null && fonts[savedFontIndex]) {
        changeFont(savedFontIndex);
        setSelectorValueFromStorage(fontSelectors, savedFontIndex);
    }
});

// Clock
// const date = document.getElementById("date")

// function updateDateTime() {
//     const now = new Date();
//     const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
//     const day = now.getDate().toString().padStart(2, '0'); // Get day of the month (01-31)
//     const month = months[now.getMonth()]; // Get month name
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     date.innerText = `${month} ${day} ${hours}:${minutes}:${seconds}`;
// }

// setInterval(updateDateTime, 1000); // Update every second
// updateDateTime();