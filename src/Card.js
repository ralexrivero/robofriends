import React from 'react';
import './card.css'

const Card = ({name, email, id}) => {
    return (
        <div className="robo-card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot profile"/>
            <div>
                <h2 className="">{name}</h2>
                <p className="">{email}</p>
            </div>
        </div>
    );
}

export default Card;