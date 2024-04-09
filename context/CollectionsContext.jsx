import {createContext} from "react";

const Collections = createContext(
    [
        {name:"Familia", images: []},
        {name:"Lazer", images: []},
        {name:"Esporte", images: []},
        {name:"Trabalho", images: []},
        {name:"Outros", images: []},
        {name:"Nenhuma", images: []},
    ]
)

export default Collections