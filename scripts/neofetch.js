osList = ["os x", "ios"];
linuxDistros = ["ubuntu", "debian", "arch", "mint", 
                "fedora", "linux", "opensuse", "slackware", 
                "gentoo", "centos", "kubuntu", "red hat", 
                "lubuntu", "xubuntu"];



document.getElementById("os").innerHTML = platform.os;
document.getElementById("browser").innerHTML = platform.name + " "  + platform.version;
document.getElementById("engine").innerHTML = platform.layout;
document.getElementById("cores").innerHTML = navigator.hardwareConcurrency;
document.getElementById("language").innerHTML = navigator.language
document.getElementById("time").innerHTML = new Date();
document.getElementById("memory").innerHTML = navigator.deviceMemory === undefined ? "Not Available" : navigator.deviceMemory + " " + "GB";

let logo = document.getElementById("logo");

if (platform.os.toString().toLowerCase().includes("windows")) {
    logo.innerHTML = windows;
    setInfoColors("red", "green");
} else if (isLinux()){
    logo.innerHTML = linux;
    setInfoColors("var(--orange)", "yellow")
} else if (isApple()) {
    logo.innerHTML = apple;
    setInfoColors("green", "orange")
} else if (platform.os.toString().toLowerCase().includes("android")) {
    logo.innerHTML = android;
    setInfoColors("green", "green");
}

document.getElementById("logo").style.color = "var(--blue)";



function isApple() {
    return osList.some((os) => platform.os.toString().toLowerCase().includes(os));
}

function isLinux() {
    return linuxDistros.some((distro) => platform.os.toString().toLowerCase().includes(distro));
}

function setInfoColors(hostnameColor, categoryColor) {
    document.getElementById("hostname").style.color = hostnameColor;
    Array.from(document.getElementsByClassName("category")).forEach((element) => { element.style.color = categoryColor });
} 