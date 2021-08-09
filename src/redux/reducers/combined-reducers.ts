import {combineReducers} from "redux";
import {usersReducer} from "./users-reducer";
import {todosReducer} from "./todos-reducer";

export const reducers = combineReducers({
    users: usersReducer,
    todos: todosReducer,
})

export type reducers = ReturnType<typeof reducers>