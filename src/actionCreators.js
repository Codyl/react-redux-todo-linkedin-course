import * as actionTypes from './actions'
export const createTodo = todo => ({
    type: actionTypes.CREATE_TODO,
    payload: { todo },
});
export const removeTodo = todo => ({
    type: actionTypes.REMOVE_TODO,
    payload: { todo }
});
export const completeTodo = todo => ({
    type: actionTypes.COMPLETE_TODO,
    payload: { todo }
});
export const loadTodosInProgress = () => ({
    type: actionTypes.LOAD_TODOS_IN_PROGRESS,
})
export const loadTodosSuccess = todos => ({
    type: actionTypes.LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const loadTodosFailure = () => ({
    type: actionTypes.LOAD_TODOS_FAILURE,
});