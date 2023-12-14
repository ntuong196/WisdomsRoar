// import { MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs'

import {
	createBottomTabNavigator,
	BottomTabNavigationEventMap,
	BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'

// import {
// 	BottomTabNavigationOptions,
// 	BottomTabNavigationEventMap,
// 	createBottomTabNavigator,
// } from '@react-navigation/bottom-tabs'

import { TabNavigationState, ParamListBase } from '@react-navigation/native'

import { withLayoutContext } from 'expo-router'

const Navigator = createBottomTabNavigator().Navigator

export const CustomBottomTabs = withLayoutContext<
	BottomTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	BottomTabNavigationEventMap
>(Navigator)
