import React from 'react';

import './index.scss'
function ReviewsCard({name, body, email}) {

    return (
        <li className="Reviews">
            <p className="Reviews-name">{name}</p>
            <p className="Reviews-info">{body}</p>
            <p className="Reviews-info">Email : {email}</p>
        </li>
    );
}

export default ReviewsCard;