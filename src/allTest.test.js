/** @jest-environment jsdom */
import addToDo from './modules/add.js';
import setIds from './modules/setIds.js';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });
describe('addToDo', () => {
  beforeEach(() => localStorage.clear());
  it('should add a todo to the localStorage', () => {
    const e = { target: { elements: { content: { value: 'Test todo' } } } };
    addToDo(e);
    const todos = JSON.parse(localStorage.getItem('todos'));
    expect(todos[0]).toEqual({ content: 'Test todo', complet: false, id: 1 });
  });
});

describe('setIds', () => {
  it('should set new ids for todos in localStorage', () => {
    const todos = [{ title: 'todo 1', description: 'todo 1 description' },
      { title: 'todo 2', description: 'todo 2 description' }];
    const expectedTodos = [{ id: 1, title: 'todo 1', description: 'todo 1 description' },
      { id: 2, title: 'todo 2', description: 'todo 2 description' }];
    localStorage.setItem('todos', JSON.stringify(todos));
    setIds();
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(expectedTodos);
  });
});