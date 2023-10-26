import React from 'react';
import YouTube from "react-youtube";
import "./style.css"

export type videoIdProps = {
    videoId: string;
}
const YouTubeVideo : React.FC<videoIdProps> = ({videoId}) => {
    const opts = {
        height: 'auto',
        width: 'auto',
        playerVars: {
            borderRadius: '1.5em', // C'est ici que vous définissez le border-radius
            'z-index': '1',
        },
    };

    /*const onReady = (event: any) => {
        event.target.playVideo(); // Activer la lecture automatique de la vidéo
    };*/

    return (
        <YouTube  videoId={videoId} opts={opts} /*onReady={onReady}*//>
    );
};

export default YouTubeVideo;
