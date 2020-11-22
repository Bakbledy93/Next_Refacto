const initialState = {
  loading: false,
  currentUser: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER' :
      return {
        ...state,
        loading: true,
        currentUser: action
      }
    default: 
      return state;
  }
}

export default reducer