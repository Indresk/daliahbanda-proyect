import { Link, useLoaderData, useParams } from "react-router";
import Button from "../../buttons/GeneralButton";

export default function AlbumView(){
    const { album } = useLoaderData();
    const { albumName } = useParams();

    return(
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1>Album: {`${albumName}  ${album}`}</h1>
        </div>
    )
}