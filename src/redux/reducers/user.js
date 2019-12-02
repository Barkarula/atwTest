const initialState = {
	// items: null,
	// isLoading: false
	data: null,
  token: window.localStorage.token,
  isAuth: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  	// case 'MESSAGES:SET_ITEMS':
  	//   return {
  	//   	...state,
  	//   	items: payload,
  	//   	isLoding: false
  	//   };
  	// case 'MESSAGES:SET_IS_LОADING':
  	//   return {
  	//   	...state,
  	//   	isLoding: false
  	//   };
  	case 'USER:SET_DATA':
  	  return {
  	  	...state,
  	  	data: payload,
        isAuth: true,
        token: window.localStorage.token
  	  };
    case 'USER:SET_FAILEDAUTH':
      return {
        ...state,
        //data: payload,
        isAuth: false,
        token: window.localStorage.token
      };
    case 'USER:SET_IS_AUTH':
      return {
        ...state,
        isAuth: payload
      };
  	default:
  	  return state;
  }
};