import HeaderComponent from "../components/HeaderComponent";
import ContainerImages from "../components/gallery/ContainerImages";
import CardImagem from "../components/gallery/CardImagem";
import AreaButtons from "../components/gallery/AreaButtons";
import ButtonCamera from "../components/gallery/ButtonCamera";
import ButtonGaleria from "../components/gallery/ButtonGaleria";

export default function GalleryScreen(){
    return (
        <>
            <HeaderComponent/>
            <ContainerImages/>
            <CardImagem/>
            <AreaButtons/>
            <ButtonCamera/>
            <ButtonGaleria/>
        </>
    )
}