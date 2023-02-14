import { LOGINFAIL, LOGINREQUEST, LOGINSUCCESS } from "./ActionType";

const loginRequest = () => {
      return {
            type: LOGINREQUEST,
      };
};

const loginSuccess = (payload) => {
      return {
            type: LOGINSUCCESS,
            payload,
      };
};

const loginFail = () => {
      return {
            type: LOGINFAIL,
      };
};


export { loginRequest, loginSuccess, loginFail }
