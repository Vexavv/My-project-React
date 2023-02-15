import React from 'react';
import './Pagination.scss'
import {Link} from "react-router-dom";
function Pagination({reviewsPerPage, totalReviews, paginate}) {
    const reviewsNumbers = [];
    for (let i = 1; i <= Math.ceil(totalReviews/reviewsPerPage); i++) {
        reviewsNumbers.push(i)
    }
    return (
        <div>
<ul className='Pagination'>
    {reviewsNumbers.map(number=>(
        <li className='Pagination-item' key={number}>
            <Link href="#" onClick={()=> paginate(number)}>{number}</Link>
        </li>
    ))}
</ul>

        </div>
    );
}

export default Pagination;


