import { Link } from "react-router";

export default function RecommendedSong({song}){
    return(
        <>
        <div className="play-music-container w-7/8 place-self-center rounded-sm bg-darkgray">
            <Link to="/albums" className="album-view-link block w-full text-center place-content-center text-[28px] bg-[#a3004c] h-14 rounded-sm">Ver Discografía</Link> 
            <div className="song-info-container grid grid-cols-2 gap-7">
                <div className="title-container place-content-center pt-13 pb-13 pl-13 ">
                    <div className="description-section flex ">
                        <img className="play-icon size-13 self-center mr-7" src="https://www.freeiconspng.com/uploads/play-button-icon-png-15.png" alt="" />
                        <div>
                            <h3 className="song-title text-[2.6rem] ">{ song.name }</h3>
                            <p className="song-description"> {song.description}</p>
                        </div>
                    </div>
                    <div className="streaming-platforms grid grid-cols-4 mt-7 ">
                        <span>Spotify</span>
                        <span>Apple Music</span>
                        <span>Youtube Music</span>
                        <span>Amazon Music</span>
                    </div>
                    <hr className="text-[#717171]"/>


                </div>
                <div className="song-image-container">
                    <img src={song.cover} className="w-full pt-13 pb-13 pr-13" alt={song.name+ " Oficial Banner"}/>
                </div>
            </div>
        </div>

        </>
    )
}