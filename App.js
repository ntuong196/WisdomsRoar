import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

// Screen
import SplashScreen from './components/SplashScreen' // Custom splash screen instead of Expo's default splash screen
import DailyVerseScreen from './components/DailyVerseScreen'

export default function App() {
	const [isLoading, setIsLoading] = React.useState(true)

	const [userToken, setUserToken] = React.useState(null)
	const getUserToken = async () => {
		// testing purposes
		const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
		try {
			// custom logic
			await sleep(2000)
			const token = null
			setUserToken(token)
		} finally {
			setIsLoading(false)
		}
	}

	React.useEffect(() => {
		getUserToken()
	}, [])
	if (isLoading) {
		// Haven't finished checking for the token yet
		return <SplashScreen />
	}
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="DailyVerseScreen"
					component={DailyVerseScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
