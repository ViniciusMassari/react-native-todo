import { useEffect, useReducer, useState } from 'react';
import { todoReducer } from '../../reducer/reducer';
import {
  markTodoAsCompleted,
  updateTodo,
  initializeTodos,
  addNewTodo,
  deleteTodo,
} from '../../reducer/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@react-native-todo:1.0.0';

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const getData = async () => {
  const value = await AsyncStorage.getItem(KEY);
  console.log('GETDATA', value);

  if (value !== null) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

export const storeData = async (todos: Todo[]) => {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem(KEY, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export function useHandleTasks() {
  const [todosState, dispatch] = useReducer(todoReducer, { todos: [] });

  const { todos } = todosState;
  const initializeData = async () => {
    const value = await getData();

    if (value) dispatch(initializeTodos(value));
  };

  useEffect(() => {
    initializeData();
  }, []);

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  async function createNewTodo(title: string) {
    const id = String(Date.now());
    const todo: Todo = {
      id,
      title,
      isCompleted: false,
    };

    // @ts-ignore
    dispatch(addNewTodo(todo));
  }

  async function removeTodo(todoId: string) {
    dispatch(deleteTodo(todoId));
  }

  function completeTodo(todoId: string) {
    dispatch(markTodoAsCompleted(todoId));
  }

  function updateTodoTitle(todoId: string, newTitle: string): void {
    dispatch(updateTodo(todoId, newTitle));
  }

  return {
    updateTodoTitle,
    completeTodo,
    removeTodo,
    createNewTodo,
    todos,
    storeData,
  };
}
