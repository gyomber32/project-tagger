import { User } from "../../Types"
import { ActionType, ActionTypes } from "../Actions"

const initialState: Partial<User> = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    address: undefined,
    isAdmin: undefined
}
export default (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return action.payload;
        case ActionTypes.REMOVE_USER:
            return initialState;
        default: return state;
    }
}

