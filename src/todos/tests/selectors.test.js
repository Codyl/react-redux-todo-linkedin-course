import { expect } from 'chai'
import { getCompletedTodos } from '../selectors'

describe('The getcompletedTodos selector', () => {
    it('Returns only the completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello', 
            isCompleted: true
        },
        {
            text: 'Say Goodbye', 
            isCompleted: false
        },
        {
            text: 'Climb mount everest', 
            isCompleted: false
        },
        ];
        const expected = [{
            text: 'Say Hello', 
            isCompleted: true
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    })
})