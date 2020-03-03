import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, SHOW_TASK } from "../actions/actionsType";

const initialState = [];

export const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(el => el.key !== action.payload);
    case COMPLETE_TASK:
      return state.map(el =>
        el.key === action.payload ? { ...el, checked: !el.checked } : el
      );
    case EDIT_TASK:
      // console.log(action.payload.key)
      return state.map(el=>el.key===action.index?{...el, text:action.payload}:el);
    case SHOW_TASK:
          // console.log(action.payload.key)
      return state.map(el=>el.key===action.payload?{...el, edit:!el.edit}:el);

    default:
      return state;
  }
};
