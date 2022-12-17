var background = document.getElementById("picture");

function changeBackground() {
    var styles = window.getComputedStyle(background);
    var image = parseInt(styles.backgroundImage.slice(-7,-6));
    var n;
    do {n = randInt(1, 7)} while(n == image);

    background.style.backgroundImage = `url(./assets/${n}.jpg)`;
    setCookie(`${n}.jpg`);
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setCookie(background_image) {
    document.cookie = "image=" + background_image + "; SameSite=Lax; Secure";
}

const cookieValue = document.cookie.split(" ;").find((row) => row.startsWith("image=")) ?.split('=')[1];

function setDefaultBackground(background_image) {
    if(cookieValue) {
        background.style.backgroundImage = `url(./assets/${cookieValue})`;
    }
}