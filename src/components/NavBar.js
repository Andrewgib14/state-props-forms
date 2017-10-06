import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                {this.props.children}

                <footer>

                    <div id="share" className="footer-bar col-12">
                        <br />
                        <a className="btn btn-default btn-md sr-button" href="#">Share!</a>
                    </div>

                </footer>
            </div>
        )
    }
}
