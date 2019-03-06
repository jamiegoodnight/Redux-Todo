
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const CLEAR = 'CLEAR'
export const SAVE = 'SAVE'

export const addTodo = todo => {
    console.log(todo)
    return {
        type: ADD_TODO,
        payload: {
            value: todo,
            completed: false
        }
    }
}

export const completeTodo = index => {
    return {
        type: COMPLETE_TODO,
        payload: index,
    }
}

export const clear = () => {
    return {
        type: CLEAR,
    }
}

export const save = () => {
    return {
        type: SAVE,
    }
}
