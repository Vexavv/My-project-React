import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncReviews, getValue} from "../../store/reviewsSlice";
import Loader from "../../components/Loader/Loader";
import './Reviews.scss'
import Error from "../../components/Error/Error";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";
import Pagination from "../../components/Paginetion/Pagination";
import Button from "../../components/Button/Button";




function Reviews(props) {
    const dispatch = useDispatch()
    const reviews = useSelector(state => state.reviews.reviews)
    const status = useSelector(state => state.reviews.status)

    const [currentPage, setCurrentPage] = useState(1)
    const [reviewsPerPage] = useState(20)

    const lastReviewsIndex = currentPage * reviewsPerPage
    const firstReviewsIndex = lastReviewsIndex - reviewsPerPage
    const currentReviews = reviews.slice(firstReviewsIndex, lastReviewsIndex)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const nextPage = () => {
        setCurrentPage(prev => prev + 1)
    }
    const prevPage = () => {
        setCurrentPage(prev => prev - 1)
    }

    useEffect(() => {
        dispatch(fetchAsyncReviews())
    }, [dispatch])
    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
            return (
                <div className="Reviews">
                    <h1 className="Reviews-title">Reviews</h1>
                    <ul className="Reviews-list">
                        {currentReviews.map(item => {
                            return <ReviewsCard key={item.id} item={item} {...item} />
                        })}
                    </ul>

                    <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviews.length} paginate={paginate}/>
                    <div className='Reviews-btn'>
                        <Button onClick={prevPage} text='Prev' btnClass="btn1"/>
                        <Button onClick={nextPage} text='Next' btnClass="btn1" />
                    </div>
                </div>


            );
        default:
            return <Error error={status}/>
    }


}

export default Reviews;