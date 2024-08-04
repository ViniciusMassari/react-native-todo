import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { useTheme } from '@rneui/themed';

interface TodoInfoProps {
  createdTodos: number;
  notCompletedTodos: number;
}

export const TodoInfo = ({
  createdTodos,
  notCompletedTodos,
}: TodoInfoProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.taskInfo}>
        <View style={styles.info}>
          <Text style={{ ...styles.infoText, color: theme.colors.blue }}>
            Criadas
          </Text>
          <Text
            style={{ ...styles.number, backgroundColor: theme.colors.gray400 }}
          >
            {createdTodos}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={{ ...styles.infoText, color: theme.colors.purple }}>
            Concluídas
          </Text>
          <Text
            style={{ ...styles.number, backgroundColor: theme.colors.gray400 }}
          >
            {notCompletedTodos}
          </Text>
        </View>
      </View>
    </View>
  );
};
