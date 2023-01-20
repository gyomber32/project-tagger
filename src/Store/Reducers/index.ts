import { combineReducers } from "redux";

/* redures */
import user from "./user";
import projects from "./project";
import loader from "./loader";

const rootReducer = combineReducers({
    user, projects, loader,
});

export default rootReducer;

export type State = Readonly<ReturnType<typeof rootReducer>>