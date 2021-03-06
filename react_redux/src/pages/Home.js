import React, { useState } from "react";

const Home = () => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
        setText("");
    };

    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add To Do</button>
            </form>
            <ul></ul>
        </div>
    );
};

export default Home;
