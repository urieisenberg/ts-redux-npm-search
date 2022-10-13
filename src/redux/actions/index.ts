import { ActionType } from "../actionType";

export type SearchAction =
  | SearchPackageAction
  | SearchPackageSuccessAction
  | SearchPackageErrorAction;

export interface SearchPackageAction {
  type: ActionType.SEARCH_PACKAGE;
}

export interface SearchPackageSuccessAction {
  type: ActionType.SEARCH_PACKAGE_SUCCESS;
  payload: string[];
}

export interface SearchPackageErrorAction {
  type: ActionType.SEARCH_PACKAGE_ERROR;
  payload: string;
}
