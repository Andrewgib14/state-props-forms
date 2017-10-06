import React, { Component } from 'react'
import styles from '../styles/styles.css'


export default class PlayListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let songs;
        songs = this.props.songs.map((song, index) => {
            return (
                <div className="card" key={index}>
                    <p className="artist">Artist / Band: {song.songArtist}</p>
                    <p>Title: {song.songTitle}</p>
                    <p>Added By: {song.username}</p>
                    <p>Comments: {song.comments}</p>
                </div>
            )
        })

        return (

            <div className="song-ctr">
                <div className="inner-ctr">
                    {songs}
                </div>
            </div>
        );

    }
}
