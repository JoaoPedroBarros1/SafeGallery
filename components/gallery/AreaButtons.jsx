import React, {useState, useContext} from "react";
import {FAB, Portal} from "react-native-paper";

import pickImageCamera from "./ButtonCamera";
import pickImageGaleria from "./ButtonGaleria";
import {Collections} from "../../context/CollectionsContext";

export default function AreaButtons({ collectionName }){
    const Collection = useContext(Collections)
    const [state, setState] = useState({open: false})

    const onStateChange = ({open}) => setState({open})

    const {open} = state

    return (
        <Portal>
            <FAB.Group
                actions={[
                    {
                        icon: 'camera',
                        label: 'Tirar foto',
                        onPress: () => {pickImageCamera(collectionName, Collection.addImage)}
                    },
                    {
                        icon: 'image-multiple',
                        label: 'Ad. da galeria',
                        onPress: () => {pickImageGaleria(collectionName, Collection.addImage)}
                    }
                ]}
                icon={open ? 'close' : 'plus'}
                open={open}
                onStateChange={onStateChange}
                visible />
        </Portal>
    )
}