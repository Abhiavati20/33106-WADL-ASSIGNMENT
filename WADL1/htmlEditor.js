let cleanRequired;
let default_text = "Enter or paste your text here.";
let fullScreen = 0;

async function getRandomQuote() {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => document.getElementById("text").innerHTML = data.content + ' ~ ' + data.author)
    .catch(error => console.log(error));
   
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

const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  var html = first.textContent;
  if(html === 'Type Your Html Code Here')
  {
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  }
  else{
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
  }
  
});


first.addEventListener('keyup',()=>{
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

first.addEventListener("paste", function(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
});

function clock() {
  let clockElement = document.getElementById('time');
  let date = new Date()
  clockElement.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

setInterval(clock, 1000);