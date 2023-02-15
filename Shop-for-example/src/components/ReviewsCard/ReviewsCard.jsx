import React from 'react';

import './ReviewsCard.scss'
function ReviewsCard({name, body, email}) {

    return (
        <li className="ReviewsCard">
            <p className="ReviewsCard-name">{name}</p>
            <p className="ReviewsCard-info">{body}</p>
            <p className="ReviewsCard-info">Email : {email}</p>
        </li>
    );
}

export default ReviewsCard;