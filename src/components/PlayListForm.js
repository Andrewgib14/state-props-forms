import React, { Component } from 'react'

export default class PlayListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {

            username: '',
            songTitle: '',
            songArtist: '',
            comments: '',
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addToList = (e) => {
        e.preventDefault();
        this.setState({ username: e.target.value, songTitle: e.target.value, songArtist: e.target.value, comments: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ username: '', comments: '', songArtist: '', songTitle: '' });
    }

    render() {
        let { username, songArtist, songTitle, comments } = this.state;
        return (
            <section className="bg-primary zigzag ">
                <div className="playListForm">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h3 className="section-heading text-white">Play What?</h3>

                            <form className="cf" onSubmit={this.addToList}>
                                <div className="half left cf">
                                    <input onChange={this.handleInputChange} value={username} type="text" className="form-control" name="username" autoComplete="off" placeholder="Enter your name" required />
                                    <input onChange={this.handleInputChange} value={songArtist} type="text" className="form-control" name="songArtist" autoComplete="off" placeholder="Artist or Band" required />
                                    <input onChange={this.handleInputChange} value={songTitle} type="text" className="form-control" name="songTitle" autoComplete="off" placeholder="Song Title" required />
                                </div>
                                <div className="half right cf">

                                    <textarea onChange={this.handleInputChange} value={comments} type="text" className="form-control" name="comments" placeholder="Comments"></textarea>
                                </div>

                                <button id="input-submit" type="submit" className="btn btn-default btn-md">Add Song!</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

