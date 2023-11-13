import {
	SafeAreaView,
	View,
	StyleSheet,
	Button,
	Text,
	Alert,
  } from "react-native";
import {sharedRealmContext} from "../schemas/RealmContext";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Create a realm context
const {RealmProvider, useRealm, useObject, useQuery} = sharedRealmContext;

// Expose a realm
function DailyVerseScreen ({navigation}) {
	const realm = useRealm()
	const verse = useQuery("Verse").sorted("_id");
	
	if (!RealmProvider) {
		return null;
	}
	
	return (
		<SafeAreaView> 
			<View style={styles.content}>
				<View>

				</View>
				<View style={styles.home}>
					<MaterialCommunityIcons
					name="home-circle"
					height={100}
					color= "#2A3642"
					onPress={()=>navigation.navigate("HomeScreen")}
					/>
				</View>
			</View>
		</SafeAreaView>

	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#2A3642',
	},
	home: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		paddingHorizontal: 20,
	},
});

export default DailyVerseScreen;