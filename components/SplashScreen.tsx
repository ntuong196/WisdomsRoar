import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'

export default function SplashScreen() {
	return (
		<View style={styles.splashScreen}>
			<Image
				style={styles.logo}
				source={require('../assets/meditate.png')}
			/>
			<Text>Vipassanā</Text>
			<ActivityIndicator size="large" />
		</View>
	)
}

const styles = StyleSheet.create({
	splashScreen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		height: 128,
		width: 128,
	},
})
