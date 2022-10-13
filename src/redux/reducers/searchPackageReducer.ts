import { ActionType } from "../actionType";
import { SearchAction } from "../actions";

export interface SearchState {
  isLoading: boolean;
  errorMessage: string | null;
  data: string[];
}

const initialState = {
  isLoading: false,
  errorMessage: null,
  data: [],
};

export const searchPackageReducer = (
  state: SearchState = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGE:
      return { isLoading: true, errorMessage: null, data: [] };
    case ActionType.SEARCH_PACKAGE_SUCCESS:
      return { isLoading: false, errorMessage: null, data: action.payload };
    case ActionType.SEARCH_PACKAGE_ERROR:
      return { isLoading: false, errorMessage: action.payload, data: [] };
    default:
      return state;
  }
};
