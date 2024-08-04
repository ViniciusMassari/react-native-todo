import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { ThemeProvider } from '@rneui/themed';

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import AnimatedLoader from 'react-native-animated-loader';

import { createTheme } from '@rneui/themed';
import { useEffect, useState } from 'react';

export const globalTheme = createTheme({
  lightColors: {
    blue: '#4EA8DE',
    purple: '#5E60CE',
    gray100: '#F2F2F2',
    gray200: '#D9D9D9',
    gray300: '#808080',
    warning: '#E25858',
    darkPurple: '#8284FA',
    darkBlue: '#1E6F9F',
    gray400: '#333',
    gray500: '#262626',
    gray600: '#1A1A1A',
    gray700: '#0D0D0D',
  },
  font: {
    fontFamily: {
      primary: 'Inter_400Regular',
      bold: 'Inter_700Bold',
    },
  },
});

export default function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(!visible);
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (fontsLoaded) {
    return (
      <>
        <ThemeProvider theme={globalTheme}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={'transparent'}
            translucent
          />
          <Home />
        </ThemeProvider>
      </>
    );
  } else {
    return (
      <AnimatedLoader
        visible={visible}
        overlayColor='rgba(255,255,255,0.75)'
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Carregando...</Text>
      </AnimatedLoader>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
