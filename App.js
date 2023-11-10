import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
    Text,
    View,
    ActivityIndicator
    } from 'react-native';

// run `npx expo install expo-splash-screen` before using
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// Note: only use on the first dev phase as the project may not rely on expo in future
// import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Use the custom splash screen with logo instead of Expo's default splash screen
import SplashScreen from "./components/SplashScreen";

// Display new verse on the first page after splash screen
// This should be async?
function DailyNoteScreen() {
    return (
        <View style={styles.splashScreen}>
            <Text >Loading content of daily note...</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}

// A placeholder for actually HomeScreen
function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Wisdom's Roar</Text>
        </View>
    )
}


export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);

    const getUserToken = async () => {
        // testing purposes
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        try {
            // custom logic
            await sleep(2000);
            const token = null;
            setUserToken(token);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        getUserToken();
    }, []);
    if (isLoading) {
        // Haven't finished checking for the token yet
        return <SplashScreen/>;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/*<Stack.Screen name="SplashScreen" component={SplashScreen}/>*/}
          <Stack.Screen name="DailyNoteScreen" component={DailyNoteScreen}/>
          <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>

    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
);
