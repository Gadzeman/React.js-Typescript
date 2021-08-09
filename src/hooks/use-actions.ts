import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UsersActionCreators from "../redux/action-creators" // users-action-creators

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UsersActionCreators, dispatch)
}