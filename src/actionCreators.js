import * as ACTION_TYPES from './actions'
export const createTodo = text => ({
    type: ACTION_TYPES.CREATE_TODO,
    payload: { text },
});
export const removeTodo = text => ({
    type: ACTION_TYPES.REMOVE_TODO,
    payload: { text }
});
export const completeTodo = text => ({
    type: ACTION_TYPES.COMPLETE_TODO,
    payload: { text }
})