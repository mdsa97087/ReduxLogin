import React from "react";
import { LOGINFAIL, LOGINREQUEST, LOGINSUCCESS } from "./ActionType";

const initialState = {
      isAuth: false,
      token: "",
      isLoading: false,
      isError: false,
};

function ReduxReducer(oldState = initialState, action) {
      const { type, payload } = action;

      switch (type) {
            case LOGINREQUEST:
                  return {
                        ...oldState,
                        isLoading: true,
                  };
            case LOGINSUCCESS:
                  return {
                        ...oldState,
                        isLoading: false,
                        token: payload,
                        isAuth: true,
                  };

            case LOGINFAIL:
                  return {
                        ...oldState,
                        isLoading: false,
                        token: "",
                        isAuth: false,
                        isError: true,
                  };
            default:
                  return oldState;
      }
}

export default ReduxReducer;
