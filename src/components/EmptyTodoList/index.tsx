import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { ClipBoard } from '../../../assets/ClipBoard';
import { useTheme } from '@rneui/themed';

export const EmpyTodoList = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <ClipBoard />
      <View
        style={{ ...styles.infoText, borderTopColor: theme.colors.gray300 }}
      >
        <Text
          style={{
            color: theme.colors.gray300,
            fontFamily: theme.font.fontFamily.bold,
          }}
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text
          style={{
            color: theme.colors.gray300,
            fontFamily: theme.font.fontFamily.primary,
          }}
        >
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};
