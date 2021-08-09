import {Dispatch} from "redux";
import axios from "axios";
import {TodosAction, TodosActionTypes} from "../../types/todos";

export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<TodosAction>) => {
    try {
        dispatch({type: TodosActionTypes.FETCH_TODOS})
        const resp = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {_page: page, _limit: limit}
        })
        dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: resp.data})

    } catch (e) {
        dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке дел"})
    }
}
export const setTodoPage = (page: number): TodosAction => {
    return {type: TodosActionTypes.SET_TODOS_PAGE, payload: page}
}