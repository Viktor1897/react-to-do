import { createStore } from "redux";
import reducer from "./reducers/rootReducer";

export const projectStore = createStore(reducer);
console.log(projectStore.getState());