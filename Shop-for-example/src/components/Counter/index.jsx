
import "./index.scss"
import { FaShoppingCart, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Counter(){
    const cart = useSelector(state => state.cart.cart)
    const favorites = useSelector(state => state.favorites.favorites)
    return (
            <div className="Counter">
                <Link to="cart"><FaShoppingCart className="Counter-icon"/></Link>
                <span className="Counter-num"> : {cart.length} </span>
                <Link to="favorites"><FaStar className="Counter-icon"/></Link>
                <span className="Counter-num"> : {favorites.length} </span>
            </div>
        )
}


Counter.defaultProps = {
    className: '',
};
export default Counter;