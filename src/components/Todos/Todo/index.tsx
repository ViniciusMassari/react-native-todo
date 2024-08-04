import { View, Text } from 'react-native';

import { type Todo as Task } from '../../../reducer/reducer';

import { CheckBox, useTheme, Icon } from '@rneui/themed';
import { styles } from './styles';
import { useState } from 'react';
interface TodoProps {
  todo: Task;
  removeTodo: (todoId: string) => void;
  completeTodo: (todoId: string) => void;
  todos: Task[];
}
export const Todo = ({ todo, removeTodo, completeTodo, todos }: TodoProps) => {
  const { theme } = useTheme();
  const [isPressed, setIsPressed] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.gray400 }}
    >
      <CheckBox
        onPress={() => completeTodo(todo.id)}
        checked={todo.isCompleted}
        containerStyle={styles.checkBoxContainer}
        checkedIcon={
          <Icon
            name='done'
            color={'#fff'}
            style={{
              backgroundColor: theme.colors.purple,
              borderRadius: 20,
              padding: 3,
            }}
            type='material'
            size={18}
          />
        }
        uncheckedIcon={
          <Icon
            color={theme.colors.blue}
            name='radio-button-unchecked'
            type='material'
            size={24}
          />
        }
      />
      <Text
        style={{
          fontFamily: theme.font.fontFamily.primary,
          color: todo.isCompleted ? theme.colors.gray300 : theme.colors.gray100,
          flex: 1,
          flexWrap: 'wrap',
          textDecorationLine: todo.isCompleted ? 'line-through' : 'none',
        }}
      >
        {todo.title}
      </Text>
      <Icon
        name='delete'
        style={{ ...styles.deleteIcon }}
        color={isPressed ? theme.colors.warning : theme.colors.gray300}
        onPress={() => {
          setIsPressed(!isPressed);
          removeTodo(todo.id);
          console.log(todos);
        }}
      />
    </View>
  );
};
