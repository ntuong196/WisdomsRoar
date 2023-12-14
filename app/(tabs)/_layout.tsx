/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { AntDesign, Octicons } from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router'
// import { CustomBottomTabs } from '../../components/CustomBottomTabs'
import {
	Text,
	StyleSheet,
	Pressable,
	useColorScheme,
	// GestureResponderEvent,
	TouchableOpacity,
} from 'react-native'

import Colors from '../../constants/Colors'
import { View } from '../../components/Themed'
// import { ReactNode } from 'react'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

// const CustomTabBarButton = ({
// 	children,
// 	onPress,
// 	color,
// }: {
// 	children: ReactNode
// 	onPress: (e: GestureResponderEvent) => void
// 	color: string
// }) => (
// 	<TouchableOpacity
// 		style={{
// 			top: -30,
// 			justifyContent: 'center',
// 			alignItems: 'center',
// 			borderRadius: 90,
// 			...styles.shadow,
// 		}}
// 		onPress={onPress}
// 	>
// 		<View
// 			style={{
// 				width: 70,
// 				height: 70,
// 				borderRadius: 90,
// 			}}
// 		>
// 			{children}
// 		</View>
// 	</TouchableOpacity>
// )

export default function TabLayout() {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					bottom: 25,
					paddingBottom: 15,
					left: 20,
					right: 20,
					borderRadius: 15,
					height: 90,
					shadowColor: Colors[colorScheme ?? 'light'].shadow,
					backgroundColor: Colors[colorScheme ?? 'light'].panel,
					...styles.shadow,
				},
				tabBarShowLabel: false,
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: 'HOME',
					tabBarIcon: ({ color }) => (
						<View
							style={{
								backgroundColor:
									Colors[colorScheme ?? 'light'].panel,
								...styles.tabBarIconView,
							}}
						>
							<AntDesign name="home" size={28} color={color} />
							<Text
								style={{ color: color, ...styles.tabBarText }}
							>
								HOME
							</Text>
						</View>
					),
					headerRight: () => (
						<Link href="/" asChild>
							<Pressable>
								{({ pressed }) => (
									<Octicons
										name="note"
										size={25}
										color={
											Colors[colorScheme ?? 'light'].text
										}
										style={{
											marginRight: 15,
											opacity: pressed ? 0.5 : 1,
										}}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="categories"
				options={{
					title: 'CATEGORIES',
					tabBarIcon: ({ color }) => (
						<View
							style={{
								backgroundColor:
									Colors[colorScheme ?? 'light'].panel,
								...styles.tabBarIconView,
							}}
						>
							<AntDesign
								name="appstore-o"
								size={28}
								color={color}
							/>
							<Text
								style={{ color: color, ...styles.tabBarText }}
							>
								CATEGORY
							</Text>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="contemplate"
				options={{
					title: 'CONTEMPLATE',
					tabBarIcon: ({ color }) => (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor:
									Colors[colorScheme ?? 'light'].panel,
							}}
						>
							<Octicons name="stack" size={28} color={color} />
							<Text
								style={{ color: color, ...styles.tabBarText }}
							>
								NOTE
							</Text>
						</View>
					),
					tabBarButton: (props) => (
						<TouchableOpacity
							style={{
								top: -30,
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: 90,
								shadowColor:
									Colors[colorScheme ?? 'light'].shadow,
								...styles.shadow,
							}}
							onPress={props.onPress}
						>
							<View
								style={{
									width: 70,
									height: 70,
									borderRadius: 90,
									backgroundColor:
										Colors[colorScheme ?? 'light'].panel,
								}}
							>
								{props.children}
							</View>
						</TouchableOpacity>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: 'SEARCH',
					tabBarIcon: ({ color }) => (
						<View
							style={{
								backgroundColor:
									Colors[colorScheme ?? 'light'].panel,
								...styles.tabBarIconView,
							}}
						>
							<AntDesign name="search1" size={28} color={color} />
							<Text
								style={{ color: color, ...styles.tabBarText }}
							>
								SEARCH
							</Text>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="setting"
				options={{
					title: 'SETTING',
					tabBarIcon: ({ color }) => (
						<View
							style={{
								backgroundColor:
									Colors[colorScheme ?? 'light'].panel,
								...styles.tabBarIconView,
							}}
						>
							<AntDesign name="setting" size={28} color={color} />
							<Text
								style={{ color: color, ...styles.tabBarText }}
							>
								SETTING
							</Text>
						</View>
					),
				}}
			/>
		</Tabs>
	)
}

const styles = StyleSheet.create({
	shadow: {
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
	tabBarIconView: {
		alignItems: 'center',
		justifyContent: 'center',
		top: 10,
	},
	tabBarText: {
		fontSize: 10,
		top: 5,
	},
})
