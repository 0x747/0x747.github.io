document.getElementById("os").innerHTML = platform.os;
document.getElementById("browser").innerHTML = platform.name + " "  + platform.version;
document.getElementById("engine").innerHTML = platform.layout;
document.getElementById("cores").innerHTML = navigator.hardwareConcurrency;
document.getElementById("language").innerHTML = navigator.language
document.getElementById("time").innerHTML = new Date();
document.getElementById("memory").innerHTML = navigator.deviceMemory === undefined ? "Not Available" : navigator.deviceMemory + " " + "GB";

let logo = document.getElementById("logo");

if (platform.os.toString().includes("Windows")) {
    logo.innerHTML = windows;
} else if (isLinux()) {
    logo.innerHTML = linux;
} else if (isApple()) {
    logo.innerHTML = apple;
}

document.getElementById("logo").style.color = "var(--blue)";

function isApple() {
    osList = ["os x", "ios"];

    return osList.some((os) => platform.os.toString().toLowerCase().includes(os));
}

function isLinux() {
    linuxDistros = ["ubuntu", "debian", "arch", "mint", "fedora", "linux", "opensuse", "slackware", "gentoo", "centos", "kubuntu"];

    return linuxDistros.some((distro) => platform.os.toString().toLowerCase().includes(distro));
}