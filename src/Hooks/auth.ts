import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from "../Api";
import { ActionTypes } from "../Store/Actions/index"

export const useLogin = (mock = false) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginCallback = useCallback(async (email: string, password: string,) => {
        try {
            dispatch({ type: ActionTypes.TOGGLE_LOADER });
            const result = await login(email, password, mock);
            dispatch({ type: ActionTypes.ADD_USER, payload: result });
            dispatch({ type: ActionTypes.TOGGLE_LOADER });
            navigate("/");
        }
        catch (error) {
            dispatch({ type: ActionTypes.TOGGLE_LOADER });
        }
    }, []);
    return loginCallback;
}