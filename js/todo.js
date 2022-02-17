
function addNote() {
    var node = document.createElement("LI");
    node.textContent = document.getElementById("note-input").value;

    var btn = document.createElement("button");
    btn.textContent = "delete";
    btn.addEventListener('click', () => node.remove());
    node.appendChild(btn);

    document.getElementById("note-list").appendChild(node);
}
