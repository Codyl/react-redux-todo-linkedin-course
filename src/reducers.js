import * as actionTypes from './actions'
export const isLoading = (state = false, action) => {
    const { type } = action;
    switch(type) {
        case actionTypes.LOAD_TODOS_IN_PROGRESS:
            return true;
        case actionTypes.LOAD_TODOS_SUCCESS:
        case actionTypes.LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}
export const todos = (state = [], action) => {
    const { type, payload }  = action;
    switch(type) {
        case actionTypes.CREATE_TODO: {
            const { todo } = payload;
            
            return state.concat(todo)
        }
        case actionTypes.REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return state.filter(todo => todo.id != todoToRemove.id);
        }
        case actionTypes.COMPLETE_TODO: {
            const { todo: completedTodo } = payload;
            return state.map(todo =>{
                if(todo.id === completedTodo.id) {
                    return completedTodo;
                }
                return todo;
            })
        }
        case actionTypes.LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }
        case actionTypes.LOAD_TODOS_FAILURE: 
        case actionTypes.LOAD_TODOS_IN_PROGRESS: 
        default: {
            return state;
        }
    }
}