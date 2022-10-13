import { combineReducers } from "redux";
import { searchPackageReducer } from "./searchPackageReducer";

export const reducers = combineReducers({
  searchPackage: searchPackageReducer,
});

export type RootState = ReturnType<typeof reducers>;
