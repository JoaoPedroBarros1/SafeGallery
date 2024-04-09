import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'

import Collections from "./context/CollectionsContext";

import LockScreen from "./screens/LockScreen";
import GalleryScreen from "./screens/GalleryScreen";
import CollectionScreen from "./screens/CollectionScreen";


const Stack = createStackNavigator()


export default function App() {
    return (
        <Collections.Provider value={{}}>
            <NavigationContainer>
                <Stack.Navigator
                    /*screenOptions={{headerShown: false}}*/
                    initialRouteName={"Lockscreen"}
                >
                    <Stack.Screen name={"Lockscreen"} component={LockScreen} />
                    <Stack.Screen name={"Collections"} component={CollectionScreen} />
                    <Stack.Screen name={"Gallery"} component={GalleryScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Collections.Provider>
    );
}