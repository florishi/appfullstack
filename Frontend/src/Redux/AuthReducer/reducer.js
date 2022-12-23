import { getLocalData } from '../../utils/localStorage';
import * as types from './actionTypes'


const initialState = {
  userData:{},
  isAuth: false,
  token: getLocalData("token") || "" ,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
    }; 
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,        
    };
     
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isError: true,        
    };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        token: ''
    }; 
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
    };
     
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "" ,
        isLoading: false,
        isError: true,        
    };

    default :
    return state
  }
};

export { reducer };
