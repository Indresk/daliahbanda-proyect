import RecommendedSong from "../components/views/Index/RecommendedSong"
export default function Test(){
    const temporalObject = {name: "Intento Sobrevivir",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",cover:"https://assets.daliahbanda.com/images/covers/intento-sobrevivir-v2.jpg"}


    return(
        <>
            <RecommendedSong song={temporalObject} />
        </>
    )
}