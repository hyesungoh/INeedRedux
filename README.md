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

    -   function for modifying data
    -   return data is application's data

-   #### Basic Usage of store, reducer (modifyier)

```js
const modifyier = (state = 0) => {
    // modifying state ...
    return state;
};

const store = createStore(modifyier);

console.log(store.getState());
```

## Redux with React
