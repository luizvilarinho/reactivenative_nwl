import { NativeBaseProvider, StatusBar} from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto";
import {AuthContextProvider} from "./src/contexts/AuthContext";

import { New } from "./src/screens/new"
import { Loading } from './src/components/Loading';
import { THEME } from './src/styles/theme';
import { Signin } from './src/screens/Signin';
import {Pools} from "./src/screens/Pools";

export default function App() {
  const [fontLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold});

  return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={ THEME }>
            <AuthContextProvider>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={"transparent"}
                    translucent
                  />

                {fontLoaded? <Pools /> : <Loading /> }

            </AuthContextProvider>

        </NativeBaseProvider>
      </SafeAreaProvider>
  );
}


