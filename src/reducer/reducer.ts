import { storeData } from '../utils/hooks/useHandleTasks';
import { ActionTypes } from './action';
import { produce } from 'immer';

export interface Todo {
  id: string;
  isCompleted: boolean;
  title: string;
}

interface TodosState {
  todos: Todo[];
}

export function todoReducer(state: TodosState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TODO:
      const addNewTodoresponse = produce(state, (draft) => {
        draft.todos.push(action.payload.todo);
      });
      storeData(addNewTodoresponse.todos);

      return addNewTodoresponse;

    case ActionTypes.DELETE_TODO:
      const deleteTodoResponse = produce(state, (draft) => {
        draft.todos = draft.todos.filter(
          (todo) => todo.id !== action.payload.todoId
        );
      });
      storeData(deleteTodoResponse.todos);
      return deleteTodoResponse;

    case ActionTypes.MARK_TODO_AS_COMPLETED:
      const markCompletedResponse = produce(state, (draft) => {
        const todoToBeCompletedIndex = draft.todos.findIndex(
          (task) => task.id === action.payload.todoId
        );
        draft.todos[todoToBeCompletedIndex].isCompleted = true;
      });
      storeData(markCompletedResponse.todos);
      return markCompletedResponse;

    case ActionTypes.UPDATE_TODO:
      return produce(state, (draft) => {
        const todoToHaveTitleModified = draft.todos.findIndex(
          (task) => task.id === action.payload.todoId
        );
        draft.todos[todoToHaveTitleModified].title = action.payload.newTitle;
      });

    case ActionTypes.INITIALIZE_TODOS:
      return produce(state, (draft) => {
        draft.todos.push(...action.payload.todos);
      });

    default:
      return state;
  }
}
