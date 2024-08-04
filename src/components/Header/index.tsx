import { darkColors, lightColors, useTheme } from '@rneui/themed';
import { Logo } from '../../../assets/Logo';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Header() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: `${theme.colors.gray700}`,
      }}
    >
      <Logo />
    </View>
  );
}
