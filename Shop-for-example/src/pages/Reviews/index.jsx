import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncReviews} from "../../store/reviewsSlice";
import Loader from "../../components/Loader";
import './index.scss'
import Error from "../../components/Error";
import ReviewsCard from "../../components/RevievsCard";
import axios from "axios";
import Pagination from "../../components/Paginetion";
import Button from "../../components/Button";

function Reviews(props) {
    const dispatch = useDispatch()
    const reviews = useSelector(state => state.reviews.reviews)
    const status = useSelector(state => state.reviews.status)
    const [currentPage, setCurrentPage] = useState(1)
    const [reviewsPerPage] = useState(15)
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
                <div className="Container">
                    <h1 className="Container-title">Reviews</h1>
                    <ul className="Container-list">
                        {currentReviews.map(item => {
                            return <ReviewsCard key={item.id} item={item} {...item} />
                        })}
                    </ul>
                    <Pagination reviewsPerPage={reviewsPerPage} totalReviews={reviews.length} paginate={paginate}/>
                    <Button onClick={prevPage} text='Prev' btnClass="btn1"/>
                    <Button onClick={nextPage} text='Next' btnClass="btn1" />
                </div>
            );
        default:
            return <Error error={status}/>
    }


}

export default Reviews;