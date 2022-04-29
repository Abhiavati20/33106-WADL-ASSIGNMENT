let cleanRequired;
let default_text = "Enter or paste your text here.";
let fullScreen = 0;

function getRandomQuote() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && cleanRequired) {
            response = JSON.parse(this.responseText);
            document.getElementById("text").innerHTML = response.content + ' ~ ' + response.author;
        }
    };
    xhttp.open("GET", "https://api.quotable.io/random", true);
    xhttp.send();
}


function setContent() {
    let params = (new URL(document.location)).searchParams;
    let content = params.get("content");
    if (content) {
        let textarea = document.querySelector('textarea')

        text = window.atob(content);
        textarea.value = text;
        setCleanRequired(0);
    }
}

function setCleanRequired(value) {
    cleanRequired = value;
}

function clearText() {
    document.textform.text.value = '';
}

let elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
    }
    document.getElementById("fullScreen").style.display = "none";
    document.getElementById("closeFullScreen").style.display = "initial";
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
        document.msExitFullscreen();
    }
    document.getElementById("fullScreen").style.display = "initial";
    document.getElementById("closeFullScreen").style.display = "none";
}

function download() {
    let text = document.getElementById("text").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    let blob = new Blob([text], { type: "text/plain" });
    let anchor = document.createElement("a");
    anchor.download = "text.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}




function updateBackgroundColor(color) {
    document.getElementById("text").style.backgroundColor = color;
}

function updateFontColor(color) {
    document.getElementById("text").style.color = color;
}
function resizeText(multiplier) {
    if (document.getElementById("text").style.fontSize == "") {
        document.getElementById("text").style.fontSize = "1.0em";
    }
    document.getElementById("text").style.fontSize = parseFloat(document.getElementById("text").style.fontSize) + (multiplier * 0.2) + "em";
}
function TextBold() {
    if (document.getElementById("text").style.fontWeight == "") {
        document.getElementById("text").style.fontWeight = "bold";
    }
    else{
        document.getElementById("text").style.fontWeight = "";
    }
}
function TextItalic() {
    if (document.getElementById("text").style.fontStyle == "") {
        document.getElementById("text").style.fontStyle = "italic";
    }
    else{
        document.getElementById("text").style.fontStyle = "";
    }
}
function TextUpper() {
    if (document.getElementById("text").style.textTransform == "") {
        document.getElementById("text").style.textTransform = "uppercase";
    }
    else{
        document.getElementById("text").style.textTransform = "";
    }
}
function TextLower() {
    if (document.getElementById("text").style.textTransform == "") {
        document.getElementById("text").style.textTransform = "lowercase";
    }
    else{
        document.getElementById("text").style.textTransform = "";
    }
}
function TextCapital() {
    if (document.getElementById("text").style.textTransform == "") {
        document.getElementById("text").style.textTransform = "capitalize";
    }
    else{
        document.getElementById("text").style.textTransform = "";
    }
}
function TextLeft() {
    if (document.getElementById("text").style.textAlign.length === 0) {
        document.getElementById("text").style.textAlign = "left";
    }
    else if(document.getElementById("text").style.textAlign.length !== 0){
        document.getElementById("text").style.textAlign = "left";
    }
    else{
        document.getElementById("text").style.textAlign = "";
    }
}
function TextCenter() {
    if (document.getElementById("text").style.textAlign.length === 0) {
        document.getElementById("text").style.textAlign = "center";
    }
    else if(document.getElementById("text").style.textAlign.length !== 0){
        document.getElementById("text").style.textAlign = "center";
    }
    else{
        document.getElementById("text").style.textAlign = "";
    }
}
function TextRight() {
    if (document.getElementById("text").style.textAlign.length === 0) {
        document.getElementById("text").style.textAlign = "right";
    }
    else if(document.getElementById("text").style.textAlign.length !== 0){
        document.getElementById("text").style.textAlign = "right";
    }
    else{
        document.getElementById("text").style.textAlign = "";
    }
}




function clock() {
    let clockElement = document.getElementById('time');
    let date = new Date()
    clockElement.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(clock, 1000);

function logout()
{
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('pw');
}

