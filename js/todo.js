

function addNote(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('note-input').value;
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.getElementById('note-list').appendChild(li);

}


function deleteNote(){
    var list = document.getElementById('add-note');
    var lastChild = list.lastElementChild();
    lastChild.remove();
}