const button = document.querySelector("button");
const Body = document.querySelector('body');
const MyInput = document.querySelector('input');
const wrapperList = document.querySelector('.wrapper-list');

button.onclick = function(){
    var InputValue = MyInput.value;
    InputValue = " ";

    const Div = document.createElement('div');
    const list = document.createElement('li');
    const Deletebtn = document.createElement('button');
    Deletebtn.textContent = 'Delete';
    Deletebtn.setAttribute('class', 'Deletebtn');
    Div.appendChild(list);
    Div.appendChild(Deletebtn);
    Div.setAttribute('class', 'list-container');
    wrapperList.appendChild(Div);

    list.innerText = MyInput.value;

    Deletebtn.onclick = function(){
        Div.remove()
    };
    MyInput.focus()
}