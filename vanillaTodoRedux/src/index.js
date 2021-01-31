import { createStore } from "redux";

const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
};

const store = createStore(reducer);

const onChange = () => {
    console.log(store.getState());
};

store.subscribe(onChange);

const createTodo = (data) => {
    const li = document.createElement("li");
    li.innerText = data;
    ul.appendChild(li);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const data = input.value;
    input.value = "";

    store.dispatch({ type: ADD_TODO, text: data });
};

form.addEventListener("submit", handleSubmit);
