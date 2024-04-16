import React, {useContext, useEffect, useState} from "react";
import {FlatList, Image} from 'react-native';
import {Collections} from "../../context/CollectionsContext";


export default function ContainerImages({ collectionName }){
    const { collections } = useContext(Collections)
    const [imagesList, setImagesList] = useState([])
    const collectionsMap = Object.fromEntries(
        collections.map(({name, images}) => [name, images])
    )

    useEffect(() => {
        if (collectionName) {
            setImagesList(collectionsMap[collectionName])
        } else {
            setImagesList(Object.values(collectionsMap).flat())
        }
    }, []);

    return (
        <FlatList
            data={imagesList}
            numColumns={2}
            renderItem={({item}) =>
                <Image source={{uri: item.toString()}} style={{flex: 1, maxWidth: '50%', aspectRatio: 1}} />
            }
        />
    )
}