const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const ul = document.querySelector(".js-ul");

const createTodo = (data) => {
    const li = document.createElement("li");
    li.innerText = data;
    ul.appendChild(li);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const data = input.value;
    input.value = "";

    createTodo(data);
};

form.addEventListener("submit", handleSubmit);
