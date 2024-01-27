import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import SplashScreen from '../components/SplashScreen'
import { dataSource } from '../database/database'
import { createConnection, getRepository } from 'typeorm/browser'

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'index',
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()

	return (
		<ThemeProvider
			value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<Stack initialRouteName="index">
				<Stack.Screen
					name="index"
					options={{
						title: 'Daily Note',
						animation: 'slide_from_bottom',
						presentation: 'modal',
						headerShown: false,
					}}
				/>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</ThemeProvider>
	)
}

// const connectDatabase = async (
// 	pathToDatabaseFile: string,
// ): Promise<SQLite.SQLiteDatabase> => {
// 	const path = require(pathToDatabaseFile)
// 	if (
// 		!(
// 			await FileSystem.getInfoAsync(
// 				FileSystem.documentDirectory + 'SQLite',
// 			)
// 		).exists
// 	) {
// 		await FileSystem.makeDirectoryAsync(
// 			FileSystem.documentDirectory + 'SQLite',
// 		)
// 	}
// 	await FileSystem.downloadAsync(
// 		Asset.fromModule(path)).uri,
// 		FileSystem.documentDirectory + 'SQLite/wisdomsroar.db'
// 	)
// 	return SQLite.openDatabase('wisdomsroar.db')
// }

export default function RootLayout() {
	const [isLoading, setIsLoading] = useState(true)
	const [loaded, error] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
		...FontAwesome.font,
	})

	const loadDatabase = async () => {
		try {
			// will load sql-lite db in here
			const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
			await sleep(2000)
			// await dataSource.initialize()
		} catch {
			throw error
		} finally {
			setIsLoading(false)
		}
	}

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) {
			throw error
		}
	}, [error])

	useEffect(() => {
		loadDatabase()
	}, [])

	if (isLoading) {
		return <SplashScreen />
	}

	return <RootLayoutNav />
}
