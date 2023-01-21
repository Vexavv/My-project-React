import React, {useEffect, useState} from "react";
import Button from "../Button";
import "./index.scss"
import {FaStar} from "react-icons/fa";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {openModal,} from "../../store/cardSlice";
import {getElement} from "../../store/cartSlice";
import {addToFavorites, removeFromFavorites} from "../../store/favoritesSlice"

function Card({name, img, color, price, article, item}) {
    const dispatch = useDispatch();
    const handlerOpenModal = (item) => {
        dispatch(getElement(item))
        dispatch(openModal())
    }

    const [favoriteOpen, setFavoriteOpen] = useState(false)
    const changeColorFavorite = () => {
        if (favoriteOpen) {
            setFavoriteOpen(false)
            dispatch(removeFromFavorites(item.article))

        } else {
            setFavoriteOpen(true)
            dispatch(addToFavorites(item))
        }
    }


    useEffect(() => {
        if (!localStorage.getItem('persist:root')) return
        const root = JSON.parse(localStorage.getItem('persist:root'))
        const nextRoot = JSON.parse(root.favorites)
        const favor = nextRoot.favorites
        favor.forEach(item => {
            if (item.article === article) {
                setFavoriteOpen(true)
            }
        })

    }, [])

    return (
        <li className="Card">
            <p className="Card-name">{name}</p>
            {favoriteOpen ?
                <FaStar className="Card-icon actives"
                        onClick={changeColorFavorite}
                /> : <FaStar className="Card-icon"
                             onClick={changeColorFavorite}
                />}
            <img className="Card-avatar" src={img}/>
            <p className="Card-info">Price: {price} $</p>
            <p className="Card-info">Article: {article}</p>
            <p className="Card-info">Color: {color}</p>
            <Button btnClass="Button" text="Add to cart" onClick={() => {
                handlerOpenModal(item)
            }}/>

        </li>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    article: PropTypes.string,
    color: PropTypes.string,
    item: PropTypes.object,
};

Card.defaultProps = {
    className: '',

};


export default Card;