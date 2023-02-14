import { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, Switch } from 'react-native';
import { ThemeContex } from './src/contex/ThemeContex';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/componants/MyKeyboard';

export default function App() {
  const [theme,setTheme]=useState('light');
  return (
    <ThemeContex.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContex.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
