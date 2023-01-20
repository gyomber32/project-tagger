import { ActionType, ActionTypes } from "../Actions";
import { Project } from "../../Types";

export default (state: Project[] = [], action: ActionType) => {
    switch (action.type) {
        case ActionTypes.ADD_PROJECT:
            return [...state, action.payload]
        case ActionTypes.REMOVE_PROJECT:
            return state.filter(project => project.id === action.payload.id)
        case ActionTypes.SET_PROJECTS:
            return action.payload
        default:
            return state;
    }
}