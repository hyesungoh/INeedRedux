import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/store";

const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    };

    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add To Do</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
