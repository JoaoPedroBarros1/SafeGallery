import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaProvider} from "react-native-safe-area-context";
import {PaperProvider} from "react-native-paper";

import Collections from "./context/CollectionsContext";

import LockScreen from "./screens/LockScreen";
import GalleryScreen from "./screens/GalleryScreen";
import CollectionScreen from "./screens/CollectionScreen";


const Stack = createStackNavigator()

// https://pictogrammers.com/library/mdi/

export default function App() {
    return (
        <PaperProvider>
            <Collections.Provider value={{}}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Stack.Navigator
                            /*screenOptions={{headerShown: false}}*/
                            initialRouteName={"Collections"}
                        >
                            <Stack.Screen
                                name={"Lockscreen"}
                                component={LockScreen}
                            />

                            <Stack.Screen
                                name={"Collections"}
                                component={CollectionScreen}
                            />

                            <Stack.Screen
                                name={"Gallery"}
                                component={GalleryScreen}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
            </Collections.Provider>
        </PaperProvider>
    );
}