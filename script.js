let addToDoButton = document.getElementById('addToDo');
let ToDoContainer = document.getElementById('ToDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    ToDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration ='line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraph);

    })
    clearToDo.addEventListener('click',function(){
        paragraph.remove();
    })



})
