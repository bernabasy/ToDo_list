/** @jest-environment jsdom */
import addToDo from './modules/add.js';
import setIds from './modules/setIds.js';
import Remove from './modules/Remove.js';

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

// describe('Remove', () => {
//   it('should remove a todo from localStorage', () => {
//     const todos = [{ id: 1, title: 'Todo 1', completed: false },
//       { id: 2, title: 'Todo 2', completed: false },
//       { id: 3, title: 'Todo 3', completed: false }];
//     localStorage.setItem('todos', JSON.stringify(todos));
//     Remove(1); const newTodos = JSON.parse(localStorage.getItem('todos'));
//     expect(newTodos).toEqual([{ id: 1, title: 'Todo 1', completed: false },
//     ]);
//   });
// });
describe('Remove', () => {
  it('should remove a todo item from the local storage', () => {
    const todos = [{ id: 1, title: 'Do homework' },
      { id: 2, title: 'Go to the gym' },
      { id: 3, title: 'Buy groceries' },];
    localStorage.setItem('todos', JSON.stringify(todos));
    Remove(2); const newTodos = JSON.parse(localStorage.getItem('todos'));
    expect(newTodos).not.toContainEqual({ id: 2, title: 'Go to the gym' });
  });
});