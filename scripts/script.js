let div = document.getElementById("test");
let terminal = document.getElementById("terminal");
let textbox0 = document.getElementById("textbox0");
textbox0.value = "";
textbox0.focus();

window.setInterval(() => {document.getElementById(`textbox${id}`).focus()}, 500);

let commandHistory = [];

const commands = new Map();
commands.set("resume", "pages/resume.html");
commands.set("projects", "https://api.github.com/users/0x747/repos");
commands.set("help", "pages/commands.html");
commands.set("reboot", 2);
commands.set("shutdown", 3);
commands.set("neofetch", 4);
//commands.set("colorscheme", 1);
commands.set("clear", 7);

const pinnedProjects = {
    "cords": true,
    "discord-bot": true,
    "IMDb-Scraper": true,
    "Vehicles-Explode-When-Flipped": true,
}

async function getHTML(filename) {
    const tempMessage = document.createTextNode("Processing command...");
    let content;
    try {
        terminal.appendChild(tempMessage);
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`[Response error]: ${response.status}`);
        }

        if (filename.includes("repos")) {
            const json = await response.json();
            content = generateProjectSummary(json);
        } else {
            content = document.createElement("div");
            content.innerHTML = await response.text()
        }

        tempMessage.remove();
        terminal.appendChild(content);
    } catch (error) {
        tempMessage.remove();
        terminal.appendChild(document.createTextNode(error.message));
        console.error(error.message);
    }
}

let id = 0;
let hostname = "[root]";
let historyIndex;

async function onEnter(e) {
    if (e.code === "Enter") {
        window.scrollTo(0, document.body.scrollHeight);
        historyIndex = 1
        const command = document.getElementById(`textbox${id}`).value.trim();

        if (command != "") {
            commandHistory.push(command);
            const fullCommand = command.split(" ");
            const baseCommand = fullCommand[0];

            const filename = commands.get(baseCommand);
            
            switch(filename) {
                case 7:
                    clearTerminal();
                    return;
                case 2:
                    window.location.reload();
                    return;
                case 3:
                    clearTerminal();
                    commandHistory = [];
                    historyIndex = 1;
                    document.getElementById("screen").style.display = "none";
                    document.body.style.backgroundColor = "black";
                    document.getElementById("powerButton").style.display = "block";
                    return;
                case 4:
                    terminal.appendChild(document.getElementById("neofetch").cloneNode(true));
                    createNewLine();
                    return;
                case 5:
                    await getProjects();
                    return;
            }
            
            if (filename && fullCommand.length == 1) {
                await getHTML(filename);
            } else if (filename && fullCommand.length > 1) {
                terminal.appendChild(document.createTextNode(`${fullCommand[0]}: unrecognized option '${fullCommand[1]}'`));
            }
            else {
                terminal.appendChild(document.createTextNode(`${command.split(" ")[0]}: no such command`));
            }
        }
        
        createNewLine();
    } else if (e.code == "ArrowUp") {
        const length = commandHistory.length;

        if (historyIndex > length) {
            return;
        }
        if (length) {
            document.getElementById(`textbox${id}`).value = commandHistory[length - historyIndex];
            historyIndex += 1
        }
    } else if (e.code == "ArrowDown") {
        const length = commandHistory.length;
        if (length && historyIndex > 0) {
            historyIndex -= 1;
            document.getElementById(`textbox${id}`).value = commandHistory[length - historyIndex];
        }
        if (historyIndex < 1) {
            document.getElementById(`textbox${id}`).value = "";
            historyIndex = 1;
            return;
        }
    }
}

function createNewLine() {
    // Line div
    const div = document.createElement("div");
    div.className = "line";

    // p hostname
    const p = document.createElement("p");
    const hostnameSpan = document.createElement("span");
    const tildeSpan = document.createElement("span");

    // span elements
    tildeSpan.className = "tilde";
    hostnameSpan.className = "cmd-hostname";
    p.appendChild(hostnameSpan);
    hostnameSpan.appendChild(document.createTextNode(hostname));
    p.appendChild(document.createTextNode(":"));
    
    p.appendChild(tildeSpan);
    tildeSpan.appendChild(document.createTextNode("~"))
    p.innerHTML += "$&nbsp";

    // textbox
    id += 1;
    const textbox = document.createElement("input");
    textbox.className = "text-line";
    textbox.id = `textbox${id}`
    textbox.type = "text";

    div.appendChild(p);
    div.appendChild(textbox);
    terminal.appendChild(div);
    textbox.onkeydown = (event) => onEnter(event);
    
    if (id > 1) {
        document.getElementById(`textbox${id-1}`).disabled = true;
    }
    document.getElementById(`textbox${id}`).focus();
}

function clearTerminal() {
    terminal.innerHTML = 
    `<div class="line" id="line">
        <p>
            <span class="cmd-hostname">${hostname}</span>:<span class="tilde">~</span>$&nbsp
        </p>
        <input class="text-line" id="textbox0" type="text" onkeydown="onEnter(event)">
    </div>
    `;
    id = 0;
}

function powerOn() {
    document.getElementById("screen").style.display = "block";
    document.body.style.backgroundColor = "var(--background)";
    document.getElementById("powerButton").style.display = "none";
}

async function getProjects() {
    const tempMessage = document.createTextNode("Processing command...");
    try {
        terminal.appendChild(tempMessage);
        const response = await fetch("https://api.github.com/users/0x747/repos");
        if (!response.ok) {
            throw new Error(`[Response error]: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        const div = document.createElement("div");
        div.innerHTML = html
        tempMessage.remove();
        terminal.appendChild(div);
    } catch (error) {
        tempMessage.remove();
        terminal.appendChild(document.createTextNode(error.message));
        console.error(error.message);
    }
}

function generateProjectSummary(projects) {
    const projectContainer = document.createElement("table");
    projectContainer.className = "projects-table"

    for(let i = 0; i < projects.length; i++) {
        const projectName = projects[i].name;
        if (pinnedProjects[projectName]) {
            const project = document.createElement("tr");

            const name = document.createElement("td");
            name.className = "bold project-name";
            name.innerHTML = projectName

            const link = document.createElement("a");
            link.href = projects[i].html_url
            link.innerHTML = "<br>[see project]";

            const description = document.createElement("td");
            description.innerHTML = projects[i].description;
            description.className = "description";
            description.style.paddingBottom = "10px";

            name.appendChild(link);
            project.appendChild(name);
            project.appendChild(description);
            projectContainer.appendChild(project);
        }
    };

    return projectContainer
}

// function changeTheme() {
//     document.body.style.backgroundColor = "black";
//     Array.from(document.getElementsByClassName("text-line")).forEach((element) => {
//         
//         element.style.backgroundColor = "black";
//     });
//     createNewLine();
// }