let title = document.getElementById("title");
let unorded = document.getElementById("unorded");
let reload = document.getElementById("reload");


window.onload = function () {
    if (window.navigator.onLine) {
        online()
    }
    else {
        offline()
    }
}
window.addEventListener("online", function () {
    online();
})
window.addEventListener("offline", function () {
    offline();
})

function online() {
    title.innerHTML = "Online"
    title.style.color = "green"
    unorded.style.display = "none"
    reload.style.display = "none"
}

function offline() {
    title.innerHTML = "Offline"
    title.style.color = "green"



}
reload.onclick = function () {
    window.location.reload();
}