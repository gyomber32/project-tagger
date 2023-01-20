
import { ActionType, ActionTypes } from "../Actions";

export default (state: boolean = false, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_LOADER:
            return !state
        default:
            return state;
    }
}
