import { createStore } from "redux";

const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => ({ type: ADD_TODO, text });

const deleteToDo = (id) => ({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE_TODO:
            return state.filter((toDo) => toDo.id !== action.id);
        default:
            return state;
    }
};

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach((toDo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);

        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (event) => {
    const id = parseInt(event.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};
const handleSubmit = (event) => {
    event.preventDefault();
    const text = input.value;
    input.value = "";

    dispatchAddToDo(text);
};

const store = createStore(reducer);

store.subscribe(paintToDos);

form.addEventListener("submit", handleSubmit);
