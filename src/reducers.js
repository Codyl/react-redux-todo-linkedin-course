import * as actionTypes from './actions'


const initialState = { isLoading: false, data: []};

export const todos = (state = initialState, action) => {
    const { type, payload }  = action;
    switch(type) {
        case actionTypes.CREATE_TODO: {
            const { todo } = payload;
            
            return {
                ...state, data: state.data.concat(todo)
            };
        }
        case actionTypes.REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            return {
                ...state,
                data: state.data.filter(todo => todo.id != todoToRemove.id)
            }
        }
        case actionTypes.COMPLETE_TODO: {
            const { todo: completedTodo } = payload;
            return {
                ...state,
                data: state.data.map(todo =>{
                    if(todo.id === completedTodo.id) {
                        return completedTodo;
                    }
                    return todo;
                })
            }
        }
        case actionTypes.LOAD_TODOS_IN_PROGRESS: 
        return {
            ...state, 
            isLoading: true
        }
        case actionTypes.LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos
            }

        }
        case actionTypes.LOAD_TODOS_FAILURE:
            return {
                ...state, 
                isLoading: false
            }
        default: {
            return state;
        }
    }
}