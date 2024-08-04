import { View, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { CreateTodoForm } from '../../components/CreateTodoForm';
import { useTheme } from '@rneui/themed';
import { TodoInfo } from '../../components/Todos/TodoInfo';
import { EmpyTodoList } from '../../components/EmptyTodoList';
import { Todo } from '../../components/Todos/Todo';
import { useHandleTasks } from '../../utils/hooks/useHandleTasks';

export function Home() {
  const { theme } = useTheme();
  const { completeTodo, createNewTodo, removeTodo, updateTodoTitle, todos } =
    useHandleTasks();

  const createdTodos = todos.length;
  const notCompletedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <View style={{ backgroundColor: theme.colors.gray600, height: '100%' }}>
      <Header />
      <CreateTodoForm createNewTodo={createNewTodo} />
      <View style={{ marginEnd: 24, marginStart: 24 }}>
        <TodoInfo
          createdTodos={createdTodos}
          notCompletedTodos={notCompletedTodos}
        />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <EmpyTodoList />}
          renderItem={({ item }) => {
            return (
              <Todo
                key={item.id}
                todo={item}
                todos={todos}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
