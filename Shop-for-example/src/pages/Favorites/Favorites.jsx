import React from 'react';
import PropTypes from 'prop-types';
import "./Favorites.scss"
import {FaStar} from "react-icons/fa";
import Button from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import{removeFromFavorites} from "../../store/favoritesSlice";
import{addToCartFromFavorites} from "../../store/cartSlice";



function Favorites() {

    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites)

    return (
        <div className="Favorites">
            {!favorites.length && <h1>There is nothing in favorites yet</h1>}
            <ul className="Favorites-list">
                {favorites.map(item => {
                    return <li className="Card" key={item.article}>
                        <p className="Card-name">{item.name}</p>
                        <FaStar className="Card-icon actives"
                                onClick={() => {
                                    dispatch(removeFromFavorites(item.article))
                                }}
                        />
                        <img className="Card-avatar" src={item.img}/>
                        <p className="Card-info"> Price: {item.price} $</p>
                        <p className="Card-info"> Article: {item.article}</p>
                        <p className="Card-info"> Color: {item.color}</p>
                        <Button btnClass="Button" text="Add to cart" onClick={() => {
                            dispatch(addToCartFromFavorites(item))
                        }}/>
                    </li>
                })}

            </ul>

        </div>
    );
}

Favorites.propTypes = {
    addToCart: PropTypes.func,
    favorites: PropTypes.array,
    deleteFavorites: PropTypes.func,
    cart: PropTypes.array,
    setCart: PropTypes.func,
};

Favorites.defaultProps = {
    className: '',
};

export default Favorites;


// const [pageFavorites, setPageFavorites] = useState(() => {
//     const data = localStorage.getItem('favorites')
//     const data2 = JSON.parse(data)
//     return data2
// })
// console.log(pageFavorites)