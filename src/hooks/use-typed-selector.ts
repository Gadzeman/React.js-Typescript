import {TypedUseSelectorHook, useSelector} from "react-redux";
import {reducers} from "../redux/reducers";


export const useTypedSelector: TypedUseSelectorHook<reducers> = useSelector