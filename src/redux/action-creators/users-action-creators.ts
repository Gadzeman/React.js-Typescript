import {IUsersAction, UsersActionTypes} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => async (dispatch: Dispatch<IUsersAction>) => {
    try {
        dispatch({type: UsersActionTypes.FETCH_USERS})
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: resp.data})

    } catch (e) {
        dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузке пользователей"})
    }
}