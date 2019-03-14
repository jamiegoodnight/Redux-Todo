import { ADD_TODO } from '../actions';
import { COMPLETE_TODO } from '../actions';
import { CLEAR } from '../actions';
import { SAVE } from '../actions';

const initialState = {
    todos: [
        localStorage.getItem("todos"),
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
        return {
            ...state,
            todos: state.todos.map((x, index) => index === action.payload ? {...x, completed: !x.completed} : x)
        }
        case CLEAR: 
        return {
            ...state,
            todos: state.todos.filter(x => !x.completed)
        }
        case SAVE: 
        return {
            ...state,
            todos: state.todos.map(x => {
                return localStorage.setItem("x", state.todos.x )
            })
        }
         default: 
         return state;  
    }
}