const initialState = {
  isDark: false,
};

export default function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE': {
      return { ...state, isDark: action.payload.isDark };
    }

    default:
      return state;
  }
}
