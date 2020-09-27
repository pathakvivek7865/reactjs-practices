import React from "react";
import { IState, IAction, IEpisode } from "./interfaces";

const initialiState: IState = {
  episodes: [],
  favourites: [],
};
export const Store = React.createContext<IState | any>(initialiState);

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };

    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };

    case "REMOVE_FAV":
      return {
        ...state,
        favourites: action.payload,
      };

    default:
      return state;
  }
}

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialiState);
  return (
    <Store.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
}
