import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { z, infer } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useTheme } from '@rneui/themed';

import { styles } from './styles';
import { Add } from '../../../assets/Add';
import { Todo } from '../../reducer/reducer';

const taskSchema = z.object({
  task: z
    .string({ required_error: 'Este campo é obrigatório' })
    .min(2, 'Digite ao menos dois caracteres'),
});

interface CreateTodoFormProps {
  createNewTodo: (title: string) => void;
}

export const CreateTodoForm = ({ createNewTodo }: CreateTodoFormProps) => {
  const { theme } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: '',
    },
    resolver: zodResolver(taskSchema),
  });

  type schemaType = z.infer<typeof taskSchema>;
  const onSubmit = async (data: schemaType) => {
    createNewTodo(data.task);
    reset();
  };

  return (
    <View>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{ minLength: 2, required: true }}
          render={({ field: { value, onChange } }) => (
            <TextInput
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChangeText={onChange}
              value={value}
              style={{
                ...styles.input,
                backgroundColor: theme.colors.gray500,
                color: theme.colors.gray100,
                borderColor: isFocus ? theme.colors.purple : '',
                borderWidth: isFocus ? 1 : 0,
              }}
              placeholder='Adicione uma nova tarefa'
              placeholderTextColor={theme.colors.gray300}
            />
          )}
          name='task'
        />
        <Pressable
          onPress={handleSubmit(onSubmit)}
          style={({ pressed }) => {
            if (pressed)
              return { ...styles.button, backgroundColor: theme.colors.blue };
            return { ...styles.button, backgroundColor: theme.colors.darkBlue };
          }}
        >
          <Add />
        </Pressable>
      </View>
      {errors.task && (
        <Text style={{ color: 'red', marginLeft: 10 }}>
          {errors.task.message}
        </Text>
      )}
    </View>
  );
};
