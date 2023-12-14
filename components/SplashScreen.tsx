import {
	Text,
	View,
	StyleSheet,
	Image,
	ActivityIndicator,
	useWindowDimensions,
} from 'react-native'

export default function SplashScreen() {
	const { width } = useWindowDimensions()
	return (
		<View style={styles.splashScreen}>
			<Image
				style={{ height: width / 2, width: width / 2 }}
				source={require('../assets/images/meditate.png')}
			/>
			<Text style={{ top: 10, fontSize: 20 }}>Vipassanā</Text>
			<ActivityIndicator style={{ top: 60 }} size="large" />
		</View>
	)
}

const styles = StyleSheet.create({
	splashScreen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
