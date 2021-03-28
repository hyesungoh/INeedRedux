## I Need Redux

전역으로 상태관리를 할 수 있는 이점을 이용하고 싶어 배우는 Redux

## Redux with Vanilla JS

Using CRA for using webpack

-   #### Install Redux

```terminal
npm i redux
// or
yarn add redux
```

-   #### Store ?

    -   Place where saving data

-   #### createStore in Redux

```js
import { createStore } from "redux";

const reducer = () => {};
const store = createStore(reducer);
```

-   #### Reducer ?

    -   Function for modifying data
    -   Return data is application's data

-   #### Basic Usage of store, reducer (modifyier)

```js
const modifyier = (state = 0) => {
    // modifying state ...
    return state;
};

const store = createStore(modifyier);

console.log(store.getState());
```

-   #### Redux action
    -   Only modifyier can change own store's data
    -   Modifyier's 2nd prop is action
    -   Action must be object type

```js
const modifyier = (state, action) => {
    if (action.type === "SOMETHING") {
        return "SOMETHING";
    } else {
        return "INIT";
    }
};

const store = createStore(modifyier);
// current state === "INIT"

store.dispatch({ type: "SOMETHING" });
// current state === "SOMETHING"
```

-   #### Subscribe

    -   Subscribe detect change

```js
const onChange = () => {
    console.log("Im changed!");
};

store.subscribe(onChange);
```

-   #### 3 Principles of Redux

    -   #### Single source of truth
    -   #### State is Read-Only
        -   only waty to change the state is sending action
    -   #### Never Mutate State
        -   don't return mutated state, return new state

    ```js
    // return state.push("something");

    return [...state, { text: "something" }];
    ```

-   #### Action Creator
    -   return action object

```js
const returnAction = (something) => ({ type: SOME_TYPE, data: something });

//somewhere
store.dispatch(returnAction(data));
```

## Redux with React

-   #### Install react-redux

```terminal
npm i react-redux
```

-   #### Create, Set base Store

```js
// store/store.js

import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((toDo) => toDo !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
```

-   #### Add Action Creater

```js
const addToDo = (text) => {
    return { type: ADD, text };
};

const deleteToDo = (id) => {
    return { type: DELETE, id };
};
```

-   #### Connect App and Store

```js
// index.js
...
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
```

-   #### mapStateToProps
    add props to component using connect function

```js
...
import { connect } from "react-redux";

const Compo = (props) => {
    console.log(props);
    // it comes {...ownProps, toDos: state}
    // because function mapStateToProps return {toDos: state}
    ...
}

const mapStateToProps(state, ownProps) {
    console.log(state, ownProps);
    // state is redux store's state
    // ownProps is Compo's props
    return {toDos: state};
}

export default connect(mapStateToProps) (Compo);
```

