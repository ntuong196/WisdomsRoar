import { StyleSheet } from 'react-native'
import {
	TextField,
	Button,
	// Text, View,
	Colors,
} from 'react-native-ui-lib'
import { Text, View } from '../../components/Themed'

export default function HomeScreen() {
	return (
		<View
			marginL-20
			marginR-20
			useSafeArea
			paddingH-25
			paddingT-120
			backgroundColor="white"
		>
			<Text style={styles.title} text20>
				Welcome
			</Text>
			<TextField
				text50
				border
				floatOnFocus
				floatingPlaceholder
				fieldStyle={styles.withUnderline}
				placeholder="username"
				grey10
				showCharCounter
				maxLength={30}
			/>
			<TextField text50 placeholder="password" secureTextEntry grey10 />
			<View marginT-100 center marginB-50>
				<Button text70 white background-orange30 label="Login" />
				<Button link text70 orange30 label="Sign Up" marginT-20 />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	withUnderline: {
		borderBottomWidth: 1,
		borderColor: Colors.$outlineDisabled,
		paddingBottom: 4,
	},
	title: {
		color: 'blue',
		opacity: 0.6,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
