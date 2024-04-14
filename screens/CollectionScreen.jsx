import HeaderComponent from "../components/HeaderComponent";
import {SafeAreaView} from "react-native";

import Collections from "../context/CollectionsContext";
import {useContext} from "react";


export default function CollectionScreen({ navigation }){
    const collections_list = useContext(Collections)

    return (
        <SafeAreaView>
            <HeaderComponent navigation={navigation} />

        </SafeAreaView>
    )
}