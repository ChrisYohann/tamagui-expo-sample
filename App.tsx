import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Tamagui from './tamagui.config';

import { LOAD_STORYBOOK } from '@env';
import StoryBookUI from './storybook';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Sofia-Regular': require('./assets/fonts/SofiaProRegular.otf'),
    'Sofia-Medium': require('./assets/fonts/SofiaProMedium.otf'),
    'Sofia-Semi-Bold': require('./assets/fonts/SofiaProSemiBold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tamagui.Provider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </Tamagui.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LOAD_STORYBOOK === 'true' ? StoryBookUI : App;
