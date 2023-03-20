import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import DetailsScreen, { DetailsScreenProps } from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import { capitalize } from "./utils/capitalize";

type RootStackParamList = {
  Home: undefined;
  Details: DetailsScreenProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{header: () => null}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={({route}) => ({title: capitalize(route.params.name)})} />
    </Stack.Navigator>
  );
}

export default Router;
