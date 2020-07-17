import { createContext } from "react";
export const defaultDiscussionList = [];
const context = createContext();
export const { Provider, Consumer } = context;
export default context;
