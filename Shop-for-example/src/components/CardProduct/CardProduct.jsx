import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import "./CardProduct.scss"
import {FaStar} from "react-icons/fa";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {openModal,} from "../../store/cardSlice";
import {getElement} from "../../store/cartSlice";
import {addToFavorites, removeFromFavorites} from "../../store/favoritesSlice"

function Card({name, img, color, price, article, item, body}) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    const module = useSelector(state => state.card.module)
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
<>
    {module ? ( <li className="Card">
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
        }} disabled={cart.some(item => item.article === article)}/>
    </li>) : (<li className="Card2">
        <p className="Card2-name">{name}</p>
        {favoriteOpen ?
            <FaStar className="Card2-icon actives"
                    onClick={changeColorFavorite}
            /> : <FaStar className="Card2-icon"
                         onClick={changeColorFavorite}
            />}
        <div className='Card2-information'>
            <img className="Card2-avatar" src={img}/>
            <div>
                <p><span className="Card2-info">Price:</span> {price} $</p>
                <p><span className="Card2-info">Article:</span> {article}</p>
                <p><span className="Card2-info">Color:</span> {color}</p>
                <p className='Card2-about'><span className="Card2-info">About:</span> {body} </p>
            </div>
        </div>
        <Button btnClass="Button" text="Add to cart" onClick={() => {
            handlerOpenModal(item)
        }}/>
    </li>)

    }
</>


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