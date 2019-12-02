const initialState = {
  data: [],
  // token: window.localStorage.token,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //WОRKERS:SET_DATA
    //WОRKERS:GET_ITEMS
    case 'WОRKERS:GET_ITEMS':
      return {
        ...state,
        items: payload
        // ...state,list:action.payload
      };
    case 'WОRKERS:SET_DATA':
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};