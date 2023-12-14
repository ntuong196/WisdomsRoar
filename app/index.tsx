import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { Text, View } from '../components/Themed'
import { FloatingButton, FloatingButtonLayouts } from 'react-native-ui-lib'

interface State {
	showButton: boolean
	showSecondary: boolean
	showVertical: boolean
}

export default function DailyNoteScreen() {
	return (
		<View style={styles.container}>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Link href="/home" style={styles.link}>
				<Text style={styles.linkText}>Go to home screen!</Text>
			</Link>
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
})
