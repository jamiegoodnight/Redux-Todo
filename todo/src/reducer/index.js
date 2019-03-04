import { ADD_TODO } from '../actions';

const initialState = {
    todos: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todo: action.payload
        }
        default:
        return state;
    }
}