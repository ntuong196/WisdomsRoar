module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			// Required for expo-router
			'expo-router/babel',
			'@babel/transform-react-jsx-source',
			'babel-plugin-transform-typescript-metadata',
			[
				'module-resolver',
				{
					alias: {
						'react-native-sqlite-storage':
							'react-native-quick-sqlite',
					},
				},
			],
			'react-native-reanimated/plugin',
		],
	}
}
