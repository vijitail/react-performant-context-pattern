import React from "react";
import { Action, ActionCreatorsObject } from "./types";

export const bindActionCreators = <T>(
  actionCreators: ActionCreatorsObject<T>,
  dispatch: React.Dispatch<Action<T>>
) =>
  Object.keys(actionCreators).reduce((boundActionCreators, key) => {
    const actionCreator = actionCreators[key];
    boundActionCreators[key] = (...args: never[]) =>
      dispatch(actionCreator(...args));
    return boundActionCreators;
  }, {} as { [K in keyof ActionCreatorsObject<T>]: (...args: Parameters<ActionCreatorsObject<T>[K]>) => void });