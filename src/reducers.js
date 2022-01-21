import * as actionTypes from './actions'
export const todos = (state = [], action) => {
    const { type, payload }  = action;
    switch(type) {
        case actionTypes.CREATE_TODO: {
            const { text } = payload;
            const newTodo = { 
                text, 
                isCompleted: false
            };
            return state.concat(newTodo)
        }
        case actionTypes.REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text != text);
        }
        case actionTypes.COMPLETE_TODO: {
            const { text } = payload;
            return state.map(todo =>{
                if(todo.text === text) {
                    todo.isCompleted = true;
                }
                return todo;
            })
        }
        default: {
            return state;
        }
    }
}