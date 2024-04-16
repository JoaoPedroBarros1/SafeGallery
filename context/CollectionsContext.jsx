import {createContext, useState} from "react";


const Collections = createContext({})

function CollectionsProvider({ children }) {
    const [collections, setCollections] = useState(
        [
            {name:"Familia", images: ['https://plus.unsplash.com/premium_photo-1661774833194-a0f820cecb10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1655185497004-f3018eab9cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']},
            {name:"Lazer", images: []},
            {name:"Esporte", images: ['https://plus.unsplash.com/premium_photo-1677146015088-71992ac139af?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    'https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']},
            {name:"Trabalho", images: ['https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfHwwfHx8MA%3D%3D']},
            {name:"Outros", images: []}
        ]
    )

    function addImage(name, url) {
        let temp_column = [...collections]

        for (let i = 0; i < collections.length; i++) {
            if (name === collections[i].name) {
                temp_column[i].images.push(url)
                break
            }
        }

        setCollections(temp_column)
    }

    return (
        <Collections.Provider value={{ collections, addImage }}>
            {children}
        </Collections.Provider>
    )
}


export {Collections, CollectionsProvider}