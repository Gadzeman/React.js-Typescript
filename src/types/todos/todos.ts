export interface ITodosState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number,
}
export enum TodosActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODOS_PAGE = "SET_TODOS_PAGE"
}
interface IFetchTodosAction {
    type: TodosActionTypes.FETCH_TODOS
}
interface IFetchTodosActionSuccess {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS
    payload: any[],
}
interface IFetchTodosActionError {
    type: TodosActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface ISetTodosPage {
    type: TodosActionTypes.SET_TODOS_PAGE
    payload: number,
}
export type TodosAction = IFetchTodosAction |
                        IFetchTodosActionSuccess |
                        IFetchTodosActionError |
                        ISetTodosPage