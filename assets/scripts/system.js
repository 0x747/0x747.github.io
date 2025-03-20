
// System & Hardware
// const userAgent = navigator.userAgent;
// const userAgentData = navigator.userAgentData;
const memory = navigator.deviceMemory;
const cores = navigator.hardwareConcurrency;
// const devicePosture = navigator.devicePosture;
// const gpu = navigator.gpu;
// const maxTouchPoints = navigator.maxTouchPoints;
// const storage = navigator.storage;
// const wakeLock = navigator.wakeLock;

// Media
// const mediaCapabilities = navigator.mediaCapabilities;
// const mediaDevices = navigator.mediaDevices;
// const mediaSession = navigator.mediaSession;

// Network & Connectivity
// const bluetooth = navigator.bluetooth; // Experimental
// const connection = navigator.connection;
// const hid = navigator.hid;
// const serial = navigator.serial;
// const usb = navigator.usb;

// Input Devices
// const keyboard = navigator.keyboard;
// const virtualKeyboard = navigator.virtualKeyboard;
// const ink = navigator.ink;

// Clipboard
// const clipboard = navigator.clipboard;

// // Contacts 
// const contacts = navigator.contacts;

// Browser
// const cookieEnabled = navigator.cookieEnabled;
const language = navigator.language;
const languages = navigator.languages;
// const onLine = navigator.onLine;
// const pdfViewerEnabled = navigator.pdfViewerEnabled;
// const webdriver = navigator.webdriver;
// const buildId = navigator.buildId;

// Unknown
// const credentials = navigator.credentials;
// const locks = navigator.locks;
// const login = navigator.login;
// const presentation = navigator.presentation;
// const scheduling = navigator.scheduling;
// const serviceWorker = navigator.serviceWorker;
// const userActivation = navigator.userActivation;
// const windowControlsOverlay = navigator.windowControlsOverlay;
// const xr = navigator.xr;

// Location
// const geolocation = navigator.geolocation;

// // Privacy & Permissions
// const permissions = navigator.permissions;
// const globalPrivacyControl = navigator.globalPrivacyControl;

// Platform.js
const engine = platform.layout;
const browser = platform.name;
const architecture = platform.os.architecture;
const osName = platform.os.family;
const osVersion = platform.os.version;
const manufacturer = platform.manufacturer;
const product = platform.product;
const browserVersion = platform.version;

const na = "Not Available";

appleOS = ["os x", "ios"]
linuxDistros = ["ubuntu", "debian", "arch", "mint", 
                "fedora", "linux", "opensuse", "slackware", 
                "gentoo", "centos", "kubuntu", "red hat", 
                "lubuntu", "xubuntu", "mandriva"];
androidDistros = ["android", "calyxos", "grapheneos", "lineageos"]
                
function setLabelColor(color) {
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue(`--${color}`).trim();
    document.querySelectorAll(".system-container .label").forEach(element => {
        element.style.color = themeColor;
    });
}

function setOsLogo(elementId, currOS) {
    let tempOS;

    if (currOS.toLowerCase().includes("windows")) {
        tempOS = windows;
        setLabelColor(colorMapping.windows);
    } else if (linuxDistros.some((distro) => currOS.toLowerCase().includes(distro))) {
        tempOS = linux;
        setLabelColor(colorMapping.linux);
    }  else if (appleOS.some((os) => currOS.toLowerCase().includes(os))) {
        tempOS = apple;
        setLabelColor(colorMapping.apple)
    }  else if (androidDistros.some((os) => currOS.toLowerCase().includes(os))) {
        tempOS = android;
        setLabelColor(colorMapping.android);
    }

    try {
        document.getElementById(elementId).innerHTML = tempOS;
    } catch(err) {
        console.warn("[Error]:", err.message);
    }
}

function isNullOrUndefined(value) {
    return (value === undefined || value === null);
}

function setInnerTexts(identifier, text) {
    Array.from(document.getElementsByClassName(identifier)).forEach((element) => {
        element.innerText = text
    });
}

function setSystemDetails() {
    setInnerTexts("os", `${osName} ${osVersion} ${architecture}-bit`);
    setInnerTexts("browser", `${browser} ${browserVersion}`);
    setInnerTexts("memory", isNullOrUndefined(memory) ? na : `${memory} GiB`);
    setInnerTexts("cores", isNullOrUndefined(cores) ? na : `${cores}`);
    setInnerTexts("engine", engine);
    setInnerTexts("language", language);
    setInnerTexts("connection", `${connection.effectiveType}`)
    setInnerTexts("resolution", `${screen.width * window.devicePixelRatio}x${screen.height * window.devicePixelRatio}`)
}

document.addEventListener("DOMContentLoaded", () => {
    setSystemDetails();
});

window.addEventListener("load", () => {
    setOsLogo("logo", osName);
});

document.addEventListener("htmx:afterSettle", (event) => {
    setOsLogo("logo", osName);
    setSystemDetails();
});

//storage.estimate().then((result) => console.log(result.quota/1073741824));