import { createStore } from "redux";

const addButton = document.querySelector(".js-add");
const minusButton = document.querySelector(".js-minus");
const numberTag = document.querySelector("h1");

numberTag.innerText = "0";

const ADD = "ADD";
const MINUS = "MINUS";

const countModifyier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const countStore = createStore(countModifyier);

const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};

const onChange = () => {
    numberTag.innerText = countStore.getState();
};

countStore.subscribe(onChange);

addButton.addEventListener("click", handleAdd);
minusButton.addEventListener("click", handleMinus);
