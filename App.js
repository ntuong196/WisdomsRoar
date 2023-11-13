import * as React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Realm from "realm";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Linking,
    Dimensions
    } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// run `npx expo install expo-splash-screen` before using
// https://docs.expo.dev/versions/latest/sdk/splash-screen/
// Note: only use on the first dev phase as the project may not rely on expo in future
// import * as SplashScreen from 'expo-splash-screen';

// Screens
// Use the custom splash screen with logo instead of Expo's default splash screen
import SplashScreen from "./components/SplashScreen";
import DailyVerseScreen from "./components/DailyVerseScreen";

// Realm
import { verseRealmContext } from "../schemas/RealmContext";
const {useRealm} = verseRealmContext;
const Stack = createNativeStackNavigator();

// Setting a windowSize variable to be used in the styles below.
const windowSize = Dimensions.get('window');

function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const realm = useRealm();
    const verse1 = realm.create('Verse', {
        title: "CONSISTENT MINDFULNESS BRINGS IN UNDERSTANDING",
        favourite: false,
        date: "November 12, 2023",
        author: "Sayadaw U Tejaniya",
        detail : "We don't see more because we try to see more; we see more when the mind becomes more able to. If we want the mindfulness to be sharp, to be able to understand and see more, we just have to be mindful consistently - and persistence and time will bring in those things.",
        origin: "Swiss Retreat 2019 Interviews 1(1:19:15-1:19:55) with Sayadaw U Tejaniya",
        Category: "understanding"
    })
    realm.write(()=>verse1)
    const getResources = async () => {
        // testing purpose only, will replace by loadingFont or loadingVerse...
        const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
        try {
            // custom logic
            await sleep(2000);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        getResources();
    }, []);

    if (isLoading) {
        // Haven't finished checking for the token yet
        return <SplashScreen/>;
    }
    return (
        // <RealmProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="DailyVerseScreen" component={DailyVerseScreen}/>
                    {/* <Stack.Screen name="HomeScreen" component={HomeScreen}/>    */}
                </Stack.Navigator>
            </NavigationContainer>
        // </RealmProvider>
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
export default App;