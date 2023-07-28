import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        let {name, description, urlToImage, url} = this.props;
        return (
            <>
                <div className="card">
                    <div className="image">
                        <img src={urlToImage} alt="Photo" />
                    </div>
                    <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href={url}>GitHub</a>
                    </div>
                </div>
            </>
        )
    }
}
