import { NativeBaseProvider, StatusBar} from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto";

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/loading';
import { Signin } from './src/screens/Signin';

export default function App() {
  const [fontLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});

  return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={ THEME }>
        <StatusBar 
            barStyle="light-content"
            backgroundColor={"transparent"}
            translucent
          />

        {fontLoaded? <Signin /> : <Loading /> }

        </NativeBaseProvider>
      </SafeAreaProvider>
  );
}


