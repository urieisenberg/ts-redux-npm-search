import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actionType";
import { SearchAction } from "../actions";

export const searchPackages = (searchTerm: string) => {
  return async (dispatch: Dispatch<SearchAction>) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGE,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: searchTerm,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_PACKAGE_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_PACKAGE_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
