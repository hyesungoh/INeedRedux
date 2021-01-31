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

## Redux with React
