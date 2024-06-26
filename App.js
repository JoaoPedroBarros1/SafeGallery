import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import {PaperProvider} from "react-native-paper";
import {CollectionsProvider} from "./context/CollectionsContext";

import LockScreen from "./screens/LockScreen";
import GalleryScreen from "./screens/GalleryScreen";
import CollectionScreen from "./screens/CollectionScreen";


const Stack = createStackNavigator()

// https://pictogrammers.com/library/mdi/

export default function App() {
    return (
        <PaperProvider>
            <CollectionsProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{headerShown: false}}
                        initialRouteName={"Lockscreen"}
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
            </CollectionsProvider>
        </PaperProvider>
    );
}