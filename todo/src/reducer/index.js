import { ADD_TODO } from '../actions';
import { COMPLETE_TODO } from '../actions'

const initialState = {
    todos: [
        {
         value: "walk the dog",
         completed: false,
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
        case COMPLETE_TODO: 
        return {...state,
            todos: state.todos.map((todo, index) => {
                if (index===action.payload) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        }
         default: 
         return state;  
    }
}