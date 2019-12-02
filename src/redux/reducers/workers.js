const initialState1 = {
	//items: [],
  data: 'test',
	token: window.localStorage.token,
  isAuth: 'test',
  test: 'test',
  dataList: 'dataList',
  items: []
};

export default (state = initialState1, { type, payload }) => {
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
        dataList: payload
        //isAuth: true,
        //token: window.localStorage.token,

        //items: payload
        // ...state,list:action.payload
      };
  	default:
  	  return state;
  }
};